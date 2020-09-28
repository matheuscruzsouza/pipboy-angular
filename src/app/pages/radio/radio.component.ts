import { Component, OnInit } from "@angular/core";
import { RadioService } from "src/app/shared/radio.service";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.sass"],
})
export class RadioComponent implements OnInit {
  radios: any;
  radio: any;

  constructor(private radioService: RadioService) {}

  ngOnInit(): void {
    this.radios = this.radioService.getRadioList();
    this.radio = this.radioService.radio;

    this.radioService.radio_change.subscribe((radio) => {
      this.radio = radio;
    });
  }

  setRadio(radio) {
    this.radioService.setRadio(radio.value);
  }

  isRadioSelected(radio) {
    return this.radio.name == radio.name;
  }
}
