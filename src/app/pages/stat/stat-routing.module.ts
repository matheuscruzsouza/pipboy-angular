import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { StatComponent } from "./stat.component";
import { StatusComponent } from "./status/status.component";
import { SpecialComponent } from "./special/special.component";
import { PerksComponent } from "./perks/perks.component";

const routes: Routes = [
  {
    path: "stat",
    component: StatComponent,
    children: [
      {
        path: "status",
        component: StatusComponent,
        outlet: "stat",
      },
      {
        path: "special",
        component: SpecialComponent,
        outlet: "stat",
      },
      {
        path: "perks",
        component: PerksComponent,
        outlet: "stat",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatRoutingModule {}
