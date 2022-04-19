import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
 
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { HealthComponent } from './pages/health/health.component';
import { BurgerComponent } from './pages/burger/burger.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    MenupageComponent,
    PizzaComponent,
    HealthComponent,
    BurgerComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
