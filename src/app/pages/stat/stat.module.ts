import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { StatusComponent } from "./status/status.component";
import { SpecialComponent } from "./special/special.component";
import { PerksComponent } from "./perks/perks.component";
import { StatComponent } from "./stat.component";

import { StatRoutingModule } from "./stat-routing.module";
import { FooterModule } from "src/app/shared/component/footer/footer.module";
import { VaultBoyModule } from "src/app/shared/component/vault-boy/vault_boy.module";

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
