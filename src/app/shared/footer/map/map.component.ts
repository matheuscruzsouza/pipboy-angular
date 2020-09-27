import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.sass"],
})
export class FooterMapComponent implements OnInit {
  DATE = new Date();

  constructor() {
    this.DATE.setFullYear(this.DATE.getFullYear() + 267);
  }

  ngOnInit(): void {}
}
