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
import { DataService } from "../data.service";

@Component({
  selector: "app-vaultboy",
  templateUrl: "./vault_boy.component.html",
  styleUrls: ["./vault_boy.component.sass"],
})
export class VaultBoyComponent implements OnChanges, AfterViewInit {
  @ViewChild("head_status") head_status: ElementRef;
  @ViewChild("left_arm_status") left_arm_status: ElementRef;
  @ViewChild("left_leg_status") left_leg_status: ElementRef;
  @ViewChild("right_arm_status") right_arm_status: ElementRef;
  @ViewChild("right_leg_status") right_leg_status: ElementRef;

  status = this.dataService.player_status;

  head = this.status.head < 10 ? "crippled" : "normal";
  left_arm = this.status.left_arm < 10 ? "crippled" : "normal";
  right_arm = this.status.right_arm < 10 ? "crippled" : "normal";
  left_leg = this.status.left_leg < 10 ? "crippled" : "normal";
  right_leg = this.status.right_leg < 10 ? "crippled" : "normal";
  state = this.status.state;

  constructor(private dataService: DataService) {}

  ngOnChanges(): void {
    this.updateStatus();
    this.updatePercentage();
  }

  ngAfterViewInit() {
    this.updateStatus();
    this.updatePercentage();
  }

  updateStatus() {
    this.head = this.status.head < 10 ? "crippled" : "normal";
    this.left_arm = this.status.left_arm < 10 ? "crippled" : "normal";
    this.right_arm = this.status.right_arm < 10 ? "crippled" : "normal";
    this.left_leg = this.status.left_leg < 10 ? "crippled" : "normal";
    this.right_leg = this.status.right_leg < 10 ? "crippled" : "normal";
    this.state = this.status.state;
  }

  updatePercentage() {
    this.head_status.nativeElement.style.width = `${this.status.head}%`;
    this.left_arm_status.nativeElement.style.width = `${this.status.left_arm}%`;
    this.right_arm_status.nativeElement.style.width = `${this.status.right_arm}%`;
    this.left_leg_status.nativeElement.style.width = `${this.status.left_leg}%`;
    this.right_leg_status.nativeElement.style.width = `${this.status.right_leg}%`;
  }

  loseLife(member) {
    console.log(member);

    switch (member) {
      case "left_arm":
        this.status.left_arm -= 10;
        if (this.status.left_arm < 0) this.status.left_arm = 0;
        break;
      case "head":
        this.status.head -= 10;
        if (this.status.head < 0) this.status.head = 0;
        break;
      case "right_arm":
        this.status.right_arm -= 10;
        if (this.status.right_arm < 0) this.status.right_arm = 0;
        break;
      case "left_leg":
        this.status.left_leg -= 10;
        if (this.status.left_leg < 0) this.status.left_leg = 0;
        break;
      case "right_leg":
        this.status.right_leg -= 10;
        if (this.status.right_leg < 0) this.status.right_leg = 0;
        break;
    }
    this.updateStatus();
    this.updatePercentage();
  }
}
