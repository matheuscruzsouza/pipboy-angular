import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterStatusComponent } from "./status/status.component";
import { FooterRadioComponent } from "./radio/radio.component";
import { FooterMapComponent } from "./map/map.component";
import { FooterInvComponent } from "./inv/inv.component";

@NgModule({
  declarations: [
    FooterStatusComponent,
    FooterRadioComponent,
    FooterMapComponent,
    FooterInvComponent,
  ],
  imports: [CommonModule],
  exports: [
    FooterStatusComponent,
    FooterRadioComponent,
    FooterMapComponent,
    FooterInvComponent,
  ],
})
export class FooterModule {}
