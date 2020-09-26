import { Injectable, EventEmitter } from "@angular/core";
import { Player } from "./model/player";
import { Observable } from "rxjs";
import { Marker } from "./model/marker";

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

  getPlayerLocations() {
    return [
      new Marker("vault", 395.1, 121.5, { found: false }),
      new Marker("sanctuary", 469, 148),
      new Marker("player", 370.1, 121.5, { width: 15, height: 20, hud: true }),
      new Marker("destiny", 510, 140, { width: 12, height: 30 }),
    ];
  }
}
