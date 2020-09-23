import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StatusComponent } from "./pages/stat/status/status.component";
import { MapComponent } from "./pages/map/map.component";

const routes: Routes = [
  {
    path: "stat",
    component: StatusComponent,
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
