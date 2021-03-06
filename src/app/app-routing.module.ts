import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimbsListComponent } from './climbs-list/climbs-list.component';
import { ClimbCardComponent } from './climb-card/climb-card.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { ClimbExperienceComponent } from './climb-experience/climb-experience.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'my-climbs-list', component: ClimbsListComponent },
  { path: 'home', component: ClimbCardComponent },
  { path: 'climb-shop', component: ShopItemsComponent },
  { path: 'climb-experience', component: ClimbExperienceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
