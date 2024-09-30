import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsBoxComponent } from './items-box/items-box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsBoxComponent,
    HeaderComponent,
    FooterComponent,
    ItemsPageComponent,
    HomePageComponent,
    ItemsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
