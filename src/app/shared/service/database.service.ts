import { Injectable } from "@angular/core";
import { NgGunService } from "ng-gun";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  connection;

  constructor(private gunService: NgGunService) {}

  public set(path: string[]) {
    this.connection = this.gunService.gun;

    path.forEach((place) => (this.connection = this.connection.get(place)));
  }

  public put(data: any) {
    this.connection.put(btoa(JSON.stringify(data)));
  }

  public get(callback: Function) {
    return this.connection.once((item, key) =>
      callback(JSON.parse(atob(item)), key)
    );
  }
}
