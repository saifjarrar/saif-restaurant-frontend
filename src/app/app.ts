import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FoodParticlesComponent } from './shared/food-particles/food-particles';

@Component({
  imports: [RouterOutlet, FoodParticlesComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
