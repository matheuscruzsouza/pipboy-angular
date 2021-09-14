import { Injectable } from "@angular/core";
import * as Gun from "gun";
import * as SEA from "gun/sea";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  private GUN;
  private USER;

  connection = undefined;
  private = undefined;

  constructor() {
    this.GUN = Gun(["https://personal-gundb.herokuapp.com/gun"]);
    this.USER = this.GUN.user().recall({ sessionStorage: true });

    if (typeof Gun.SEA === "undefined") {
      this.GUN.SEA = SEA;
    }

    this.connection = this.GUN;

    if (this.userStatus()) {
      this.private = this.USER.get("private");
    }
  }

  // GENERIC METHODS

  private defineConnection(path: string[], _private: boolean) {
    let conn = _private ? this.private : this.connection;

    path.forEach((place) => (conn = conn.get(place)));

    return conn;
  }

  public put(path: string[], data: any, _private: boolean = false) {
    const conn = this.defineConnection(path, _private);

    conn.put(btoa(JSON.stringify(data)));
  }

  public set(path: string[], data: any, _private: boolean = false) {
    const conn = this.defineConnection(path, _private);

    conn.set(data);
  }

  public get(path: string[], _private: boolean = false) {
    const conn = this.defineConnection(path, _private);

    return new Observable((subscriber) =>
      conn.once((item, key) =>
        subscriber.next({ key, data: JSON.parse(atob(item)) })
      )
    );
  }

  public getAll(path: string[], _private: boolean = false) {
    const conn = this.defineConnection(path, _private);

    return new Observable((subscriber) =>
      conn.map((item, key) => subscriber.next({ item, key }))
    );
  }

  public on(path: string[], _private: boolean = false) {
    const conn = this.defineConnection(path, _private);

    return new Observable((subscriber) => {
      conn.on((item, key) =>
        subscriber.next({ key, value: JSON.parse(atob(item)) })
      );
    });
  }

  // SPECIFIC USER METHODS

  public signup(username: string, password: string) {
    return from(
      new Promise((resolve, reject) =>
        this.USER.create(username, password, (data) => {
          if (!data.err) {
            resolve(data);
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
          if (!data.err) {
            this.saveData(data, username);
            resolve(data);
          } else {
            reject(data);
          }
        })
      )
    );
  }

  private saveData(data, username) {
    const copyData = { ...data.sea };
    copyData.username = username;
    sessionStorage.setItem("auth", JSON.stringify(copyData));
    this.private = this.USER.get("private");
    this.set(["users", "online"], {
      username: username,
      pubKey: data.sea.pub,
    });
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

  public getUserData(pubKey: string) {
    return new Observable((subscriber) =>
      this.GUN.user(pubKey).once((data) => subscriber.next(data))
    );
  }
}
