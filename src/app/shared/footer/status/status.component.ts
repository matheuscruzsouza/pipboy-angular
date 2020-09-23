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

  life = 100;
  action_points = 50;

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    this.dataService.player_change.subscribe((player) => {
      this.life = player.getLife();

      console.log(player.experience);

      this.complete.nativeElement.style.width = `${player.experience}%`;
    });
  }
}
