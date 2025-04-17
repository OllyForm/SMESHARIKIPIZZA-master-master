import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Наше меню</h2>
    <div class="menu-list">
      <!-- Список напитков -->
    </div>
    <a routerLink="/menu">← Назад в меню</a>
  `,
  styles: []
})
export class MenuComponent {}
