import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Subscriber, Subscription } from 'rxjs';
import { VaultBoyComponent } from 'src/app/shared/component/vault-boy/vault_boy.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass'],
})
export class StatusComponent implements OnInit, OnChanges, OnDestroy {
  player_status: any;

  private subscriptions = new Subscription();

  @ViewChild('vaultboy') vaultboy: VaultBoyComponent;

  constructor(
    private dataService: DataService,
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.setProperty(
      '--weapon-url',
      `url('${document.baseURI}assets/images/HUD/Menu/icon_52.svg')`
    );
    this.elementRef.nativeElement.style.setProperty(
      '--aim-url',
      `url('${document.baseURI}assets/images/HUD/Menu/icon_26.svg')`
    );

    this.elementRef.nativeElement.style.setProperty(
      '--helmet-url',
      `url('${document.baseURI}assets/images/HUD/Menu/icon_54.svg')`
    );

    this.elementRef.nativeElement.style.setProperty(
      '--shield-url',
      `url('${document.baseURI}assets/images/HUD/Menu/icon_14.svg')`
    );

    this.elementRef.nativeElement.style.setProperty(
      '--voltage-url',
      `url('${document.baseURI}assets/images/HUD/Menu/icon_20.svg')`
    );

    this.elementRef.nativeElement.style.setProperty(
      '--nuclear-url',
      `url('${document.baseURI}assets/images/HUD/Menu/icon_24.svg')`
    );
  }

  ngOnInit(): void {
    this.player_status = this.dataService.player;

    this.subscriptions.add(
      this.dataService.player_change.subscribe((player) => {
        this.player_status = player;

        this.vaultboy.updateStatus();
        this.vaultboy.updatePercentage();
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
