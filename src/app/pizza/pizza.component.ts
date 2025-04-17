import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'] // если есть стили
})
export class PizzaComponent {}
