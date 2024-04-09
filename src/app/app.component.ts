import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
