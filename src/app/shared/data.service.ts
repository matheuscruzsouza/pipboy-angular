import { Injectable, EventEmitter } from "@angular/core";
import { Player } from "./model/player";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  player = new Player();
  player_change = new EventEmitter<Player>();

  constructor() {}

  loseLife(member, value) {
    this.player.loseLife(member, value);
    this.player_change.emit(this.player);
  }
}
