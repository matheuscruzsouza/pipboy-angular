import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-perks",
  templateUrl: "./perks.component.html",
  styleUrls: ["./perks.component.sass"],
})
export class PerksComponent implements OnInit {
  PERKS: any[];
  selected: string;
  img: string;
  text: string;

  constructor() {}

  ngOnInit(): void {}

  setPerk(perk: string) {
    const perfil = this.PERKS[perk];

    this.selected = perk;
    this.img = perfil.image;
    this.text = perfil.text;
  }

  getValue(key) {
    return 0;
  }
}
