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

  private image = "n_n_n_n";

  statusImage = `assets/images/vault-boy/body/${this.image}.gif`;

  constructor() {}

  ngOnChanges(): void {
    this.image = [
      this.right_arm[0],
      this.left_arm[0],
      this.right_leg[0],
      this.left_leg[0],
    ].join("_");

    this.statusImage = `assets/images/vault-boy/body/${this.image}.gif`;
  }
}
