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
      new Marker(
        "assets/images/HUD/MAP/vault_not_found_green.png",
        "assets/images/HUD/MAP/vault_found_green.png",
        395.1,
        121.5,
        32.5,
        32.5
      ),
      new Marker(
        "assets/images/HUD/MAP/sanctuary_not_found_green.png",
        "assets/images/HUD/MAP/sanctuary_green.png",
        469,
        148,
        22.5,
        32.5
      ),
    ];
  }
}
