import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { VaultBoyModule } from "src/app/shared/vault-boy/vault_boy.module";

import { StatusComponent } from "./status/status.component";
import { SpecialComponent } from "./special/special.component";
import { PerksComponent } from "./perks/perks.component";

@NgModule({
  declarations: [StatusComponent, SpecialComponent, PerksComponent],
  imports: [CommonModule, VaultBoyModule],
  exports: [StatusComponent, SpecialComponent, PerksComponent],
})
export class StatModule {}
