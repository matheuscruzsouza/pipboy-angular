import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./shared/header/menu/menu.component";

import { StatModule } from "./pages/stat/stat.module";
import { MapComponent } from "./pages/map/map.component";
import { InvComponent } from './pages/inv/inv.component';
import { DataComponent } from './pages/data/data.component';
import { RadioComponent } from './pages/radio/radio.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, MapComponent, InvComponent, DataComponent, RadioComponent],
  imports: [BrowserModule, AppRoutingModule, StatModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
