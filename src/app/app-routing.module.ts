import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';

const routes: Routes = [
  {"path":"Home",component:HomePageComponent},
  {"path":"Items",component:ItemsPageComponent},
  {"path":"ItemsDetails/:id",component:ItemsDetailsComponent},
  {"path":"",redirectTo:"/Home",pathMatch:"full"}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
