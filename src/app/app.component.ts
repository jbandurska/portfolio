import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
