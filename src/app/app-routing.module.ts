import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./pages/map/map.component";
import { StatComponent } from "./pages/stat/stat.component";

const routes: Routes = [
  {
    path: "stat",
    component: StatComponent,
  },
  {
    path: "map",
    component: MapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
