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

  private body_folder = "assets/images/body/";

  private STATUSES = {
    normal_normal_normal_normal: "normal/normal_green.gif",
    normal_normal_crippled_normal: "hurt/left_leg/left_leg_green.gif",
    normal_crippled_crippled_normal:
      "hurt/right_arm_left_leg/right_arm_left_leg_green.gif",
    crippled_normal_crippled_normal:
      "hurt/left_arm_left_leg/left_arm_left_leg_green.gif",
    crippled_normal_normal_normal: "hurt/left_arm/left_arm_green.gif",
    normal_crippled_normal_normal: "hurt/right_arm/right_arm_green.gif",
    crippled_crippled_normal_normal:
      "hurt/right_left_arm/left_right_arm_green.gif",
    crippled_crippled_crippled_normal:
      "hurt/right_left_arm_left_leg/right_left_arm_left_leg_green.gif",
    normal_normal_normal_crippled: "hurt/right_leg/right_leg_green.gif",
    crippled_normal_normal_crippled:
      "hurt/right_leg_left_arm/right_leg_left_arm_green.gif",
    normal_crippled_normal_crippled:
      "hurt/right_leg_right_arm/right_leg_right_arm_green.gif",
    crippled_crippled_normal_crippled:
      "hurt/right_leg_left_arm_right_arm/right_leg_left_arm_right_arm_green.gif",
    normal_normal_crippled_crippled:
      "hurt/right_leg_left_leg/right_leg_left_leg_green.gif",
    crippled_normal_crippled_crippled:
      "hurt/right_leg_left_leg_left_arm/right_leg_left_leg_left_arm_green.gif",
    normal_crippled_crippled_crippled:
      "hurt/right_leg_left_leg_right_arm/right_leg_left_leg_right_arm_green.gif",
    crippled_crippled_crippled_crippled: "hurt/all/all_green.gif",
  };

  statusImage =
    this.body_folder +
    this.STATUSES[
      [this.left_arm, this.right_arm, this.left_leg, this.right_leg].join("_")
    ];

  constructor() {}

  ngOnChanges(): void {
    this.statusImage =
      this.body_folder +
      this.STATUSES[
        [this.left_arm, this.right_arm, this.left_leg, this.right_leg].join("_")
      ];
  }
}
