import { Injectable } from "@angular/core";
import * as Gun from "gun";
import * as SEA from "gun/sea";
import { from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  private GUN;
  private SEA;
  private USER;

  connection = undefined;
  private = undefined;

  constructor() {
    this.GUN = Gun(["https://personal-gundb.herokuapp.com/gun"]);
    this.USER = this.GUN.user().recall({ sessionStorage: true });

    if (typeof Gun.SEA === "undefined") {
      this.GUN.SEA = SEA;
    }

    this.SEA = Gun.SEA;

    this.connection = this.GUN;

    if (this.userStatus()) {
      this.private = this.USER.get("private");
    }
  }

  public put(path: string[], data: any, _private: boolean = false) {
    let conn = _private ? this.private : this.connection;

    path.forEach((place) => (conn = conn.get(place)));

    conn.put(btoa(JSON.stringify(data)));
  }

  public set(path: string[], data: any, _private: boolean = false) {
    let conn = _private ? this.private : this.connection;

    path.forEach((place) => (conn = conn.get(place)));

    conn.set(btoa(JSON.stringify(data)));
  }

  public get(path: string[], callback: Function, _private: boolean = false) {
    let conn = _private ? this.private : this.connection;

    path.forEach((place) => (conn = conn.get(place)));

    return conn.once((item, key) => callback(JSON.parse(atob(item)), key));
  }

  public getAll(path: string[], callback: Function, _private: boolean = false) {
    let conn = _private ? this.private : this.connection;

    path.forEach((place) => (conn = conn.get(place)));

    return conn.map((item, key) =>
      callback(JSON.parse(atob(item || "e30=")), key)
    );
  }

  public on(path: string[], callback: Function, _private: boolean = false) {
    let conn = _private ? this.private : this.connection;

    path.forEach((place) => (conn = conn.get(place)));

    return conn.on((item, key) => callback(JSON.parse(atob(item)), key));
  }

  public signup(username: string, password: string) {
    return from(
      new Promise((resolve, reject) =>
        this.USER.create(username, password, (data) => {
          console.log(data);

          if (!data.err) {
            const copyData = { ...data.sea };
            copyData.username = username;
            sessionStorage.setItem("auth", JSON.stringify(copyData));
            resolve(data);
            this.private = this.USER.get("private");
            this.set(["users", "online", username], {
              username: username,
              pubKey: data.sea.pub,
            });
          } else {
            reject(data);
          }
        })
      )
    );
  }

  public login(username: string, password: string) {
    return from(
      new Promise((resolve, reject) =>
        this.USER.auth(username, password, (data) => {
          console.log(data);

          if (!data.err) {
            const copyData = { ...data.sea };
            copyData.username = username;
            sessionStorage.setItem("auth", JSON.stringify(copyData));
            resolve(data);
            this.private = this.USER.get("private");
            this.set(["users", "online", username], {
              username: username,
              pubKey: data.sea.pub,
            });
          } else {
            reject(data);
          }
        })
      )
    );
  }

  public logout() {
    this.USER.leave();
    const data = JSON.parse(sessionStorage.getItem("auth"));
    try {
      this.connection
        .get("users")
        .get("online")
        .get(data.username)
        .put(btoa(JSON.stringify({ data: null })));
    } catch (error) {}
    sessionStorage.removeItem("auth");
    this.private = undefined;
  }

  public userStatus() {
    return !!sessionStorage.getItem("pair");
  }
}
