import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from "./pages/map/map.component";
import { StatComponent } from "./pages/stat/stat.component";
import { InvComponent } from "./pages/inv/inv.component";
import { DataComponent } from "./pages/data/data.component";
import { RadioComponent } from "./pages/radio/radio.component";
import { LoginComponent } from "./shared/component/login/login.component";
import { SigninComponent } from "./shared/component/signin/signin.component";
import { AuthGuard } from "./core/auth.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "stat",
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SigninComponent,
  },
  {
    path: "stat",
    component: StatComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "inv",
    component: InvComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "data",
    component: DataComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "map",
    component: MapComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "radio",
    component: RadioComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
