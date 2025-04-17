import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  template: `
    <header>
      <h1>Доставка еды</h1>
      <nav>
        <ul>
          <li><a routerLink="/menu">Меню</a></li>
          <li><a routerLink="/pizza">Пицца</a></li>
          <li><a routerLink="/napitki">Напитки</a></li>
        </ul>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
