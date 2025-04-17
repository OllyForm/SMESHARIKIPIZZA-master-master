import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, AsyncPipe],
  template: `
    <header *ngIf="showHeader()">
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
export class AppComponent {
  private router = inject(Router);

  showHeader(): boolean {
    return this.router.url !== '/pizza';
  }
}
