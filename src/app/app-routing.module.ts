import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { StatComponent } from './pages/stat/stat.component';
import { InvComponent } from './pages/inv/inv.component';
import { DataComponent } from './pages/data/data.component';
import { RadioComponent } from './pages/radio/radio.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stat',
  },
  {
    path: 'stat',
    component: StatComponent,
  },
  {
    path: 'inv',
    component: InvComponent,
  },
  {
    path: 'data',
    component: DataComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'radio',
    component: RadioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
