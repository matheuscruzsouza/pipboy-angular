import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  AfterViewChecked,
  OnChanges,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-vaultboy",
  templateUrl: "./vault_boy.component.html",
  styleUrls: ["./vault_boy.component.sass"],
})
export class VaultBoyComponent implements OnChanges, AfterViewInit {
  @Input()
  status = {
    head: 100,
    left_arm: 100,
    right_arm: 100,
    left_leg: 100,
    right_leg: 100,
    state: "normal",
  };

  @ViewChild("head_status") head_status: ElementRef;
  @ViewChild("left_arm_status") left_arm_status: ElementRef;
  @ViewChild("left_leg_status") left_leg_status: ElementRef;
  @ViewChild("right_arm_status") right_arm_status: ElementRef;
  @ViewChild("right_leg_status") right_leg_status: ElementRef;

  head = this.status.head < 10 ? "crippled" : "normal";
  left_arm = this.status.left_arm < 10 ? "crippled" : "normal";
  right_arm = this.status.right_arm < 10 ? "crippled" : "normal";
  left_leg = this.status.left_leg < 10 ? "crippled" : "normal";
  right_leg = this.status.right_leg < 10 ? "crippled" : "normal";
  state = this.status.state;

  constructor() {}

  ngOnChanges(): void {
    this.head = this.status.head < 10 ? "crippled" : "normal";
    this.left_arm = this.status.left_arm < 10 ? "crippled" : "normal";
    this.right_arm = this.status.right_arm < 10 ? "crippled" : "normal";
    this.left_leg = this.status.left_leg < 10 ? "crippled" : "normal";
    this.right_leg = this.status.right_leg < 10 ? "crippled" : "normal";
    this.state = this.status.state;
  }

  ngAfterViewInit() {
    this.head_status.nativeElement.style.width = `${this.status.head}%`;
    this.left_arm_status.nativeElement.style.width = `${this.status.left_arm}%`;
    this.right_arm_status.nativeElement.style.width = `${this.status.right_arm}%`;
    this.left_leg_status.nativeElement.style.width = `${this.status.left_leg}%`;
    this.right_leg_status.nativeElement.style.width = `${this.status.right_leg}%`;
  }
}
