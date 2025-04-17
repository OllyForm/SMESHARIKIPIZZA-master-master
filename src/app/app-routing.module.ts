// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component'; // Импортируйте компонент

const routes: Routes = [
  { path: 'pizza', component: PizzaComponent }, // Добавьте маршрут для компонента
  { path: '', redirectTo: '/pizza', pathMatch: 'full' }, // Перенаправление на главную страницу
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
