import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { DataService } from "src/app/shared/data.service";
import { Subscriber, Subscription } from "rxjs";
import { VaultBoyComponent } from "src/app/shared/component/vault-boy/vault_boy.component";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.sass"],
})
export class StatusComponent implements OnInit, OnChanges, OnDestroy {
  player_status: any;

  private subscriptions = new Subscription();

  @ViewChild("vaultboy") vaultboy: VaultBoyComponent;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.player_status = this.dataService.player;

    this.subscriptions.add(
      this.dataService.player_change.subscribe((player) => {
        this.player_status = player;

        this.vaultboy.updateStatus();
      })
    );
  }

  ngOnChanges(): void {
    this.player_status = this.dataService.player;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
