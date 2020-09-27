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

  RADIOS = {
    off: {
      name: "Desligado",
      url: null,
    },
    main: {
      name: "Main Station",
      url: "http://fallout.fm:8000/falloutfm1.ogg",
    },
    diamond: {
      name: "Diamond City Radio",
      url:
        "http://fallout.fm:8000/falloutfm6.ogg?auth=0738886807-4069-0rj025o0-f0d12905c09026ce8f0285931e6d5504?retry=0",
    },
    virginia: {
      name: "South Virginia Radio",
      url: "http://fallout.fm:8000/falloutfm10.ogg?_=1458026635?retry=0",
    },
    mwtcf: {
      name: "MWTCF",
      url:
        "http://fallout.fm:8000/falloutfm8.ogg?token=a43aafe3f3856e610476328188c88087%2F5c7a8f7a?retry=0",
    },
  };
  radio = this.RADIOS["off"];
  radio_change = new EventEmitter();

  constructor() {}

  loseLife(member, value) {
    this.player.loseLife(member, value);
    this.player_change.emit(this.player);
  }

  getPlayerLocations() {
    return [
      new Marker("vault", 395.1, 121.5, { found: true }),
      new Marker("sanctuary", 469, 148, { found: true }),
      new Marker("hospital", 1173, 371),
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
    return new Marker("destiny", 1186, 371, { width: 12, height: 30 });
  }

  getRadioList() {
    return this.RADIOS;
  }

  setRadio(radio) {
    this.radio = radio;
    this.radio_change.emit(this.radio);
  }
}
