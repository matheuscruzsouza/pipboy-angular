import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/data.service";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.sass"],
})
export class RadioComponent implements OnInit {
  radios: any;
  radio: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.radios = this.dataService.getRadioList();
    this.radio = this.dataService.radio;

    this.dataService.radio_change.subscribe((radio) => {
      this.radio = radio;
    });
  }

  setRadio(radio) {
    this.dataService.setRadio(radio.value);
  }

  isRadioSelected(radio) {
    return this.radio.name == radio.name;
  }
}
