import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.sass"],
})
export class FooterMapComponent implements OnInit {
  DATE = new Date();

  constructor() {}

  ngOnInit(): void {}
}
