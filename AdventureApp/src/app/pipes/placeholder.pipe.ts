// src/app/pipes/placeholder.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, placeholder: string, minLength: number = 0): string {
    return value && value.length >= minLength ? value : placeholder;
  }
}
