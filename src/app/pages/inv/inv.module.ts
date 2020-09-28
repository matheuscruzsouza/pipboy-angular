import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvComponent } from "./inv.component";
import { WeaponsComponent } from "./weapons/weapons.component";
import { ApparelComponent } from "./apparel/apparel.component";
import { AidComponent } from "./aid/aid.component";
import { MiscComponent } from "./misc/misc.component";
import { JunkComponent } from "./junk/junk.component";
import { InvRoutingModule } from "./inv-routing.module";
import { FooterModule } from "src/app/shared/footer/footer.module";

@NgModule({
  declarations: [
    InvComponent,
    WeaponsComponent,
    ApparelComponent,
    AidComponent,
    MiscComponent,
    JunkComponent,
  ],
  imports: [CommonModule, InvRoutingModule, FooterModule],
  exports: [InvComponent],
})
export class InvModule {}
