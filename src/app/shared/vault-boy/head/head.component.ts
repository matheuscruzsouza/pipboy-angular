import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges,
} from "@angular/core";

@Component({
  selector: "vault-boy-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.sass"],
})
export class HeadComponent implements OnChanges {
  @Input()
  status = "normal";

  @Input()
  state = "normal";

  private STATUSES = {
    normal_normal: "assets/images/head/normal/normal_green.png",
    normal_hurt: "assets/images/head/hurt/normal_green.png",
    normal_addicted: "assets/images/head/addicted/normal_green.png",
    normal_irradiated: "assets/images/head/irradiated/normal_normal.png",
    crippled_hurt: "assets/images/head/hurt/crippled_green.png",
    crippled_addicted: "assets/images/head/addicted/crippled_green.png",
    crippled_irradiated: "assets/images/head/irradiated/crippled_normal.png",
  };

  statusImage = this.STATUSES[[this.status, this.state].join("_")];

  constructor() {}

  ngOnChanges(): void {
    this.statusImage = this.STATUSES[[this.status, this.state].join("_")];
  }
}
