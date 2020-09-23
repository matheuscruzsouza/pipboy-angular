import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VaultBoyComponent } from "./vault_boy.component";
import { HeadComponent } from "./head/head.component";
import { BodyComponent } from "./body/body.component";

@NgModule({
  declarations: [VaultBoyComponent, HeadComponent, BodyComponent],
  imports: [CommonModule],
  exports: [VaultBoyComponent],
})
export class VaultBoyModule {}
