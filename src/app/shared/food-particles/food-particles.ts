import { Component } from '@angular/core';

@Component({
  selector: 'app-food-particles',
  standalone: true,
  templateUrl: './food-particles.html',
  styleUrl: './food-particles.css',
})
export class FoodParticlesComponent {
  particles = [
    { left: 5, delay: 0, duration: 22, icon: '🍕' },
    { left: 15, delay: 4, duration: 25, icon: '🍓' },
    { left: 25, delay: 2, duration: 20, icon: '🍔' },
    { left: 35, delay: 7, duration: 26, icon: '🥑' },
    { left: 45, delay: 3, duration: 23, icon: '🍩' },
    { left: 55, delay: 8, duration: 21, icon: '☕' },
    { left: 65, delay: 1, duration: 27, icon: '🍒' },
    { left: 75, delay: 6, duration: 24, icon: '🧁' },
    { left: 85, delay: 4, duration: 22, icon: '🍟' },
    { left: 95, delay: 9, duration: 25, icon: '🍕' },
  ];
}
