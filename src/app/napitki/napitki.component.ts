import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-napitki',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './napitki.component.html',
  styleUrls: ['./napitki.component.css']
    })
export class NapitkiComponent {}
