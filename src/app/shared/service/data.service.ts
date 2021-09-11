import { Injectable, EventEmitter } from "@angular/core";
import { Player } from "../model/player";
import { Marker } from "../model/marker";
import { Pistol, Weapon, Melee, Shotgun } from "../model/weapon";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "../../core/auth.service";
import { DatabaseService } from "./database.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  player: Player;
  player_change = new EventEmitter<Player>();

  constructor(
    private http: HttpClient,
    private databaseService: DatabaseService
  ) {
    this.databaseService.set(["pipboy-angular", "v1", "core", "player"]);

    this.databaseService.on((data) => {
      console.log("Loading player...");
      console.log(data);

      const player = new Player();

      player.health = data.data.health;
      player.special = data.data.special;
      player.equiped = data.data.equiped;
      player.inventory = data.data.inventory;

      this.player = player;

      this.player_change.emit(this.player);
    });

    if (!this.player) {
      console.log("Building player...");

      const player = new Player({
        health: {
          head: 100,
          leftarm: 100,
          rightarm: 100,
          leftleg: 100,
          rightleg: 100,
          addicted: 0,
          irradiated: 0,
        },
        atribute: {
          strength: 1,
          perception: 2,
          endurance: 5,
          charisma: 0,
          inteligence: 5,
          agility: 5,
          luck: 5,
        },
        experience: 15,
        total_action_points: 50,
        total_health_points: 150,
      });
      this.player = player;

      this.addInventoryPlayer(new Pistol());
      this.addInventoryPlayer(new Pistol({ accuracy: 10.93 }));
      this.addInventoryPlayer(new Pistol({ accuracy: 10.93 }));
      this.addInventoryPlayer(new Shotgun());
      this.addInventoryPlayer(new Melee());

      this.databaseService.put({ data: player });

      this.player_change.emit(this.player);
    }
  }

  listPlayer(oidpessoa: string) {
    return this.http.get(
      environment.BACKEND_API + `/fallout/player?pessoa=${oidpessoa}`
    );
  }

  loseLife(member, value) {
    this.attack();
    this.player.loseLife(member, value);
    this.player_change.emit(this.player);
    this.databaseService.put({ data: this.player });
  }

  getPlayerLocations() {
    return [
      new Marker("Vault 101", "vault", 409, 138, {
        found: false,
        travel: true,
      }),
      new Marker("Sanctuary", "sanctuary", 476, 162, {
        found: false,
        travel: true,
      }),
      new Marker("Red Rocket gas station", "red_rocket", 547, 213, {
        width: 33,
        height: 33,
        found: false,
        travel: true,
      }),
      // new Marker("hospital", 1186, 386),
    ];
  }

  getPlayerPosition() {
    return new Marker("", "player", 370.1, 121.5, {
      width: 15,
      height: 20,
      hud: true,
    });
  }

  getPlayerDestiny() {
    return new Marker("", "destiny", 525, 152, {
      width: 12,
      height: 30,
      found: true,
    });
    // return new Marker("destiny", 1186, 371, {
    //   width: 12,
    //   height: 30,
    //   found: true,
    // });
  }

  addInventoryPlayer(item: any) {
    const itemType: string = item.baseClass;

    this.player.inventory[itemType].push(item);

    console.log(this.player.inventory);
  }

  setWeapon(arma: Weapon) {
    this.player.equiped.hand = arma;
    this.player_change.emit(this.player);
    console.log(this.player);

    this.databaseService.put({ data: this.player });
  }

  attack() {
    const equiped = this.player.equiped.hand;

    if (equiped && this.loseAP(equiped.apCost)) {
      equiped.fire();
    }
  }

  loseAP(value: number) {
    const ap = this.player.action_points;

    if (ap > value) {
      console.log(ap - value > 0 ? ap - value : 0);

      this.player.action_points = ap - value > 0 ? ap - value : 0;
      return true;
    }
    return false;
  }

  getPlayerWeight() {
    return Object.values(this.player.inventory).reduce(
      (curr, arr: any[]) =>
        curr + arr.reduce((curr, item) => curr + item.weight, 0),
      0
    );
  }

  getPlayerInventory(field: string) {
    return this.player.inventory[field].reduce((r, a) => {
      r[a.name + a.accuracy] = [...(r[a.name + a.accuracy] || []), a];
      return r;
    }, {});
  }
}
