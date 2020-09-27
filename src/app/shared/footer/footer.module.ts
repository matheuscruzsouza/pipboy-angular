import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterStatusComponent } from "./status/status.component";
import { FooterRadioComponent } from "./radio/radio.component";
import { FooterMapComponent } from "./map/map.component";

@NgModule({
  declarations: [
    FooterStatusComponent,
    FooterRadioComponent,
    FooterMapComponent,
  ],
  imports: [CommonModule],
  exports: [FooterStatusComponent, FooterRadioComponent, FooterMapComponent],
})
export class FooterModule {}
