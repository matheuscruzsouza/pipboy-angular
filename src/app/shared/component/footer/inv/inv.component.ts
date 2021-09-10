import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { DataService } from "../../../service/data.service";
import { Player } from "../../../model/player";

@Component({
  selector: "app-footer-inv",
  templateUrl: "./inv.component.html",
  styleUrls: ["./inv.component.sass"],
})
export class FooterInvComponent implements AfterViewInit {
  @Input() menu: string;

  @ViewChild("complete") complete: ElementRef;
  @ViewChild("possibility") possibility: ElementRef;

  player: Player;

  weight: number;
  total_weight: number;

  constructor(private dataService: DataService) {
    this.weight = this.dataService.getPlayerWeight();

    this.total_weight = 300;
  }

  ngAfterViewInit(): void {
    this.setStatus(this.dataService.player);

    this.checkHeal(20);

    this.dataService.player_change.subscribe((player) => {
      this.setStatus(player);

      this.checkHeal(20);
    });
  }

  setStatus(player) {
    this.player = player;

    if (this.complete)
      this.complete.nativeElement.style.width = `${player.getLife()}%`;
  }

  checkHeal(value: number) {
    if (this.possibility)
      this.possibility.nativeElement.style.width = `${
        this.player.getLife() + value
      }%`;
  }
}
