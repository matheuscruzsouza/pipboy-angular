import { Injectable, EventEmitter } from "@angular/core";
import { Radio } from "./model/radio";

@Injectable({
  providedIn: "root",
})
export class RadioService {
  RADIOS = [
    new Radio("Desligado", null),
    new Radio("Main Station", "http://fallout.fm:8000/falloutfm1.ogg"),
    new Radio(
      "Diamond City Radio",
      "http://fallout.fm:8000/falloutfm6.ogg?auth=0738886807-4069-0rj025o0-f0d12905c09026ce8f0285931e6d5504?retry=0"
    ),
    new Radio(
      "South Virginia Radio",
      "http://fallout.fm:8000/falloutfm10.ogg?_=1458026635?retry=0"
    ),
    new Radio(
      "MWTCF",
      "http://fallout.fm:8000/falloutfm8.ogg?token=a43aafe3f3856e610476328188c88087%2F5c7a8f7a?retry=0"
    ),
    new Radio(
      "Megaton Radio",
      "https://us2.internet-radio.com/proxy/megatoncafe?mp=/stream;"
    ),
    new Radio(
      "Rockamolly",
      "https://uk6.internet-radio.com/proxy/rockaroundtheblock?mp=/stream;"
    ),
    new Radio(
      "Majestic Radio",
      "https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live"
    ),
  ];

  radio = this.RADIOS["off"];
  radio_change = new EventEmitter();

  constructor() {
    const radio_name = localStorage.getItem("radio") || "off";

    this.setRadio(
      Object.values(this.RADIOS).filter((radio) => radio.name == radio_name)[0]
    );
  }

  getRadioList() {
    return this.RADIOS;
  }

  setRadio(radio) {
    this.radio = radio;
    localStorage.setItem("radio", radio.name);
    this.radio_change.emit(this.radio);
  }
}
