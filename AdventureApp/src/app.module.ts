// src/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SpinningWheelComponent } from './components/spinning-wheel/spinning-wheel.component';
import { TalkativeDirective } from './directives/talkative.directive';
import { PlaceholderPipe } from './pipes/placeholder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpinningWheelComponent,
    TalkativeDirective,
    PlaceholderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Add other modules as needed (e.g., HttpClientModule for HTTP requests)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
