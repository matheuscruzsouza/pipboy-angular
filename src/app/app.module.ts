import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { StatModule } from "./pages/stat/stat.module";
import { FooterModule } from "./shared/component/footer/footer.module";
import { InvModule } from "./pages/inv/inv.module";

import { MapComponent } from "./pages/map/map.component";
import { DataComponent } from "./pages/data/data.component";
import { RadioComponent } from "./pages/radio/radio.component";
import { MenuComponent } from "./shared/component/header/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapComponent,
    DataComponent,
    RadioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatModule,
    InvModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
