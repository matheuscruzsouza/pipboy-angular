import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/data.service";
import { Weapon } from "src/app/shared/model/weapon";

@Component({
  selector: "app-weapons",
  templateUrl: "./weapons.component.html",
  styleUrls: ["./weapons.component.sass"],
})
export class WeaponsComponent implements OnInit {
  weapons: Weapon[];

  selected: Weapon;
  preview: Weapon;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.weapons = this.dataService.player.inventory.weapon;
    this.selected = this.dataService.player.equiped.hand;
  }

  isSelected(arma: Weapon) {
    return this.selected && this.selected.name == arma.name;
  }

  isPreview(arma: Weapon) {
    return (
      this.preview && this.preview.name == arma.name && !this.isSelected(arma)
    );
  }

  setPreview(arma: Weapon) {
    this.preview = arma;
  }

  select(arma: Weapon) {
    this.selected = arma;
    this.dataService.player.equiped.hand = arma;
  }

  clearPreview() {
    const hand = this.dataService.player.equiped.hand;
    this.selected = hand ? hand : null;
    this.preview = null;
  }
}
