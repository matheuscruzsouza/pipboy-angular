import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { InvComponent } from "./inv.component";
import { WeaponsComponent } from "./weapons/weapons.component";
import { ApparelComponent } from "./apparel/apparel.component";
import { AidComponent } from "./aid/aid.component";
import { MiscComponent } from "./misc/misc.component";
import { JunkComponent } from "./junk/junk.component";

const routes: Routes = [
  {
    path: "inv",
    component: InvComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "weapons",
      },
      {
        path: "weapons",
        component: WeaponsComponent,
        outlet: "inv",
      },
      {
        path: "apparel",
        component: ApparelComponent,
        outlet: "inv",
      },
      {
        path: "aid",
        component: AidComponent,
        outlet: "inv",
      },
      {
        path: "misc",
        component: MiscComponent,
        outlet: "inv",
      },
      {
        path: "junk",
        component: JunkComponent,
        outlet: "inv",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvRoutingModule {}
