// src/app/components/spinning-wheel/spinning-wheel.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel.component.html',
  styleUrls: ['./spinning-wheel.component.css']
})
export class SpinningWheelComponent {
  outcomes: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];
  result: string = '';

  spin() {
    const index = Math.floor(Math.random() * this.outcomes.length);
    this.result = this.outcomes[index];
    if (this.result === 'Try Again') {
      // Give an extra spin or handle accordingly
      this.result += ' - Extra Spin!';
    }
  }
}
