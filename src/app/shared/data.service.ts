import { Injectable, EventEmitter } from "@angular/core";
import { Player } from "./model/player";
import { Marker } from "./model/marker";
import { Pistol, Shotgun, Weapon, Melee } from "./model/weapon";

@Injectable({
  providedIn: "root",
})
export class DataService {
  player = new Player();
  player_change = new EventEmitter<Player>();

  constructor() {
    this.addInventoryPlayer(new Pistol());
    this.addInventoryPlayer(new Melee());
    console.log(this.getPlayerWeight());
  }

  loseLife(member, value) {
    this.attack();
    this.player.loseLife(member, value);
    this.player_change.emit(this.player);
  }

  getPlayerLocations() {
    return [
      new Marker("vault", 409, 138, { found: false }),
      new Marker("sanctuary", 476, 162, { found: false }),
      // new Marker("hospital", 1186, 386),
    ];
  }

  getPlayerPosition() {
    return new Marker("player", 370.1, 121.5, {
      width: 15,
      height: 20,
      hud: true,
    });
  }

  getPlayerDestiny() {
    return new Marker("destiny", 525, 152, { width: 12, height: 30 });
    return new Marker("destiny", 1186, 371, { width: 12, height: 30 });
  }

  addInventoryPlayer(item: any) {
    const itemType: string = item.baseClass;

    this.player.inventory[itemType].push(item);

    console.log(this.player.inventory);
  }

  setWeapon(arma: Weapon) {
    this.player.equiped.hand = arma;
    this.player_change.emit(this.player);
  }

  attack() {
    const equiped = this.player.equiped.hand;
    const ap = this.player.action_points;

    console.log(ap, equiped.apCost);

    if (ap > equiped.apCost) {
      equiped.fire();
      this.player.action_points -= equiped.apCost;
    }
  }

  getPlayerWeight() {
    return Object.values(this.player.inventory).reduce(
      (curr, arr: any[]) =>
        curr + arr.reduce((curr, item) => curr + item.weight, 0),
      0
    );
  }
}
