import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.sass"],
})
export class StatusComponent implements OnInit {
  @Input()
  player_status: any;

  constructor() {}

  ngOnInit(): void {}
}
