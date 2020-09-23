import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
} from "@angular/core";
import { DataService } from "../../data.service";

@Component({
  selector: "app-footer-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.sass"],
})
export class FooterStatusComponent implements AfterViewInit {
  @ViewChild("complete") complete: ElementRef;

  life =
    (this.dataService.player_status.head +
      this.dataService.player_status.left_arm +
      this.dataService.player_status.right_arm +
      this.dataService.player_status.left_leg +
      this.dataService.player_status.right_leg) /
    5;

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    console.log(this.dataService.player_status);

    this.complete.nativeElement.style.width = `${this.dataService.player_status.experience}%`;
  }
}
