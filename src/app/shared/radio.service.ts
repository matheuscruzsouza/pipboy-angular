import { Injectable, EventEmitter } from "@angular/core";
import { Radio } from "./model/radio";

@Injectable({
  providedIn: "root",
})
export class RadioService {
  RADIOS = [
    new Radio("Desligado", null, null),
    new Radio("Main Station", "http://fallout.fm:8000/falloutfm1.ogg", false),
    new Radio(
      "Diamond City Radio",
      "http://fallout.fm:8000/falloutfm6.ogg?auth=0738886807-4069-0rj025o0-f0d12905c09026ce8f0285931e6d5504?retry=0",
      false
    ),
    new Radio(
      "South Virginia Radio",
      "http://fallout.fm:8000/falloutfm10.ogg?_=1458026635?retry=0",
      false
    ),
    new Radio(
      "MWTCF",
      "http://fallout.fm:8000/falloutfm8.ogg?token=a43aafe3f3856e610476328188c88087%2F5c7a8f7a?retry=0",
      false
    ),
    new Radio(
      "Megaton Radio",
      "https://us2.internet-radio.com/proxy/megatoncafe?mp=/stream;",
      false
    ),
    new Radio(
      "Rockamolly",
      "https://uk6.internet-radio.com/proxy/rockaroundtheblock?mp=/stream;",
      false
    ),
    new Radio(
      "Majestic Radio",
      "https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live",
      false
    ),
    new Radio("Fallout Radio", "tzBGEqkwCoY", true),
    new Radio("Appalachia Radio", "EZ8ILzGWgBI", true),
    new Radio("Vintage Radio", "CvgFl14c3Uc", true),
    new Radio("WHL 570 Radio", "SK3X0pVXvTg", true),
  ];

  radio: Radio;
  radio_change = new EventEmitter();

  constructor() {
    const radio_name = localStorage.getItem("radio") || "Desligado";

    this.setRadio(this.RADIOS.filter((radio) => radio.name == radio_name)[0]);
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
