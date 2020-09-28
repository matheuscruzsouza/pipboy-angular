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

  statusImage = `assets/images/vault-boy/head/${this.state}/${this.status[0]}.png`;

  constructor() {}

  ngOnChanges(): void {
    this.statusImage = `assets/images/vault-boy/head/${this.state}/${this.status[0]}.png`;
  }
}
