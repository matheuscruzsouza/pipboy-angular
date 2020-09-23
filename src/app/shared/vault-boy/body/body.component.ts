import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges,
} from "@angular/core";

@Component({
  selector: "vault-boy-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.sass"],
})
export class BodyComponent implements OnChanges {
  @Input()
  left_arm = "normal";

  @Input()
  right_arm = "normal";

  @Input()
  left_leg = "normal";

  @Input()
  right_leg = "normal";

  private STATUSES = {
    normal_normal_normal_normal: "assets/images/body/normal/normal_green.gif",
    normal_normal_crippled_normal:
      "assets/images/body/hurt/left_leg/left_leg_green.gif",
    normal_crippled_crippled_normal:
      "assets/images/body/hurt/right_arm_left_leg/right_arm_left_leg_green.gif",
    crippled_normal_crippled_normal:
      "assets/images/body/hurt/left_arm_left_leg/left_arm_left_leg_green.gif",
    crippled_normal_normal_normal:
      "assets/images/body/hurt/left_arm/left_arm_green.gif",
    normal_crippled_normal_normal:
      "assets/images/body/hurt/right_arm/right_arm_green.gif",
    crippled_crippled_normal_normal:
      "assets/images/body/hurt/right_left_arm/left_right_arm_green.gif",
    crippled_crippled_crippled_normal:
      "assets/images/body/hurt/right_left_arm_left_leg/right_left_arm_left_leg_green.gif",
  };

  statusImage = this.STATUSES[
    [this.left_arm, this.right_arm, this.left_leg, this.right_leg].join("_")
  ];

  constructor() {}

  ngOnChanges(): void {
    this.statusImage = this.STATUSES[
      [this.left_arm, this.right_arm, this.left_leg, this.right_leg].join("_")
    ];
  }
}
