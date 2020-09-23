import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./shared/header/menu/menu.component";

import { StatModule } from "./pages/stat/stat.module";
import { MapComponent } from "./pages/map/map.component";

@NgModule({
  declarations: [AppComponent, MenuComponent, MapComponent],
  imports: [BrowserModule, AppRoutingModule, StatModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
