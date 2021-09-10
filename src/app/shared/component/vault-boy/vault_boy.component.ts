import {
  Component,
  AfterViewInit,
  OnChanges,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { DataService } from "../../service/data.service";

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

  status = this.dataService.player;

  head: string;
  left_arm: string;
  right_arm: string;
  left_leg: string;
  right_leg: string;
  state = this.status.getStatus();

  constructor(private dataService: DataService) {
    this.updateStatus();
  }

  ngOnChanges(): void {
    this.updateStatus();
    this.updatePercentage();
  }

  ngAfterViewInit() {
    this.updateStatus();
    this.updatePercentage();
  }

  updateStatus() {
    this.status = this.dataService.player;
    const members = this.status.health.members;

    this.head = members.head < 10 ? "crippled" : "normal";
    this.left_arm = members.left_arm < 10 ? "crippled" : "normal";
    this.right_arm = members.right_arm < 10 ? "crippled" : "normal";
    this.left_leg = members.left_leg < 10 ? "crippled" : "normal";
    this.right_leg = members.right_leg < 10 ? "crippled" : "normal";
    this.state = this.status.getStatus();
  }

  updatePercentage() {
    const members = this.status.health.members;

    this.head_status.nativeElement.style.width = `${members.head}%`;
    this.left_arm_status.nativeElement.style.width = `${members.left_arm}%`;
    this.right_arm_status.nativeElement.style.width = `${members.right_arm}%`;
    this.left_leg_status.nativeElement.style.width = `${members.left_leg}%`;
    this.right_leg_status.nativeElement.style.width = `${members.right_leg}%`;
  }

  loseLife(member) {
    this.dataService.loseLife(member, 10);
    this.updateStatus();
    this.updatePercentage();
  }
}
