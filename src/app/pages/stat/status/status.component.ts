import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.sass"],
})
export class StatusComponent implements OnInit {
  player_status = {
    head: 100,
    left_arm: 25,
    right_arm: 100,
    left_leg: 50,
    right_leg: 100,
    state: "hurt",
  };

  life =
    (this.player_status.head +
      this.player_status.left_arm +
      this.player_status.right_arm +
      this.player_status.left_leg +
      this.player_status.right_leg) /
    5;

  constructor() {}

  ngOnInit(): void {
    console.log(this.life);
  }
}
