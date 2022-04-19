import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { BurgerComponent } from './pages/burger/burger.component';
import { HealthComponent } from './pages/health/health.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'contact', component: ContactComponent},
  { path:'menu', component: MenuComponent},
  { path:'menu/:id', component: MenupageComponent},
  { path:'footer', component: FooterComponent},
  { path:'navbar', component: NavbarComponent},
  { path:'pizza/:id', component: PizzaComponent},
  { path:'burger/:id', component: BurgerComponent},
  { path:'health/:id', component: HealthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
