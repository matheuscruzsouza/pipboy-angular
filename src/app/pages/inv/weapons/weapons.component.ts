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
  preview_status = {
    damage_diff: 0,
    damage_image: "icon_20",
    fire_rate_diff: 0,
    fire_rate_image: "icon_22",
    range_diff: 0,
    range_image: "icon_20",
    accuracy_diff: 0,
    accuracy_image: "icon_22",
    weight_diff: 0,
    weight_image: "icon_20",
    value_diff: 0,
    value_image: "icon_20",
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.weapons = this.dataService.player.inventory.weapon;
    this.selected = this.dataService.player.equiped.hand;

    console.log(this.dataService.getPlayerInventory("weapon"));
  }

  isSelected(arma: Weapon) {
    if (this.selected) {
      const keys = Object.keys(this.selected);
      const filter = keys.filter((key) => this.selected[key] == arma[key]);
      const length = filter.length == keys.length;

      return length;
    }
    return false;
  }

  isPreview(arma: Weapon) {
    if (this.preview) {
      const keys = Object.keys(this.preview);
      const filter = keys.filter((key) => this.preview[key] == arma[key]);
      const length = filter.length == keys.length;

      return length && !this.isSelected(arma);
    }
    return false;
  }

  getDiff(field: string) {
    const delta = Math.abs(this.selected[field] - this.preview[field]);
    return delta / delta || 0;
  }

  getImage(field: string, invert = false) {
    if (!invert) {
      return this.selected[field] - this.preview[field] > 0
        ? "icon_22"
        : "icon_20";
    }
    return this.selected[field] - this.preview[field] > 0
      ? "icon_20"
      : "icon_22";
  }

  setPreview(arma: Weapon) {
    this.preview = arma;
    if (this.preview && this.selected) {
      this.preview_status = {
        damage_diff: this.getDiff("damage"),
        damage_image: this.getImage("damage"),
        fire_rate_diff: this.getDiff("fireRate"),
        fire_rate_image: this.getImage("fireRate"),
        range_diff: this.getDiff("range"),
        range_image: this.getImage("range"),
        accuracy_diff: this.getDiff("accuracy"),
        accuracy_image: this.getImage("accuracy"),
        weight_diff: this.getDiff("weight"),
        weight_image: this.getImage("weight", true),
        value_diff: this.getDiff("value"),
        value_image: this.getImage("value"),
      };
    }
  }

  select(arma: Weapon) {
    this.selected = arma;
    this.dataService.player.equiped.hand = arma;
  }

  clearPreview() {
    const hand = this.dataService.player.equiped.hand;
    this.selected = hand ? hand : null;
    this.preview = this.selected;

    this.preview_status = {
      damage_diff: 0,
      damage_image: "icon_20",
      fire_rate_diff: 0,
      fire_rate_image: "icon_22",
      range_diff: 0,
      range_image: "icon_20",
      accuracy_diff: 0,
      accuracy_image: "icon_22",
      weight_diff: 0,
      weight_image: "icon_20",
      value_diff: 0,
      value_image: "icon_20",
    };
  }
}
