// src/app/services/message.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [
    'Hello, world!',
    'Angular is awesome!',
    'Have a great day!',
    'Keep coding!',
    'You can do it!'
  ];

  constructor() { }

  getRandomMessage(): string {
    const index = Math.floor(Math.random() * this.messages.length);
    return this.messages[index];
  }
}
