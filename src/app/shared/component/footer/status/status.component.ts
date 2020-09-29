import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
} from "@angular/core";
import { DataService } from "../../../data.service";
import { Player } from "src/app/shared/model/player";

@Component({
  selector: "app-footer-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.sass"],
})
export class FooterStatusComponent implements AfterViewInit {
  @ViewChild("complete") complete: ElementRef;

  life = this.dataService.player.getLife();
  action_points = this.dataService.player.action_points;
  total_action_points = this.dataService.player.total_action_points;
  total_health_points = this.dataService.player.total_health_points;

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    this.setStatus(this.dataService.player);

    this.dataService.player_change.subscribe((player) => {
      this.setStatus(player);
    });
  }

  setStatus(player: Player) {
    this.life = player.getLife();
    this.action_points = player.action_points;

    this.complete.nativeElement.style.width = `${player.experience}%`;
  }
}
