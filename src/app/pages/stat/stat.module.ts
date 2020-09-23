import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { VaultBoyModule } from "src/app/shared/vault-boy/vault_boy.module";

import { StatusComponent } from "./status/status.component";
import { SpecialComponent } from "./special/special.component";
import { PerksComponent } from "./perks/perks.component";
import { StatComponent } from "./stat.component";
import { FooterModule } from "src/app/shared/footer/footer.module";
import { StatRoutingModule } from "./stat-routing.module";

@NgModule({
  declarations: [
    StatusComponent,
    SpecialComponent,
    PerksComponent,
    StatComponent,
  ],
  imports: [CommonModule, FooterModule, VaultBoyModule, StatRoutingModule],
  exports: [StatusComponent, SpecialComponent, PerksComponent, StatComponent],
})
export class StatModule {}
