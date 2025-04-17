import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MenuComponent } from './app/menu/menu.component';
import { PizzaComponent } from './app/pizza/pizza.component';
import { NapitkiComponent } from './app/napitki/napitki.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'pizza',
    component: PizzaComponent
  },
  {
    path: 'napitki',
    component: NapitkiComponent
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full' as const  // Важно: 'full' как литеральный тип
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
