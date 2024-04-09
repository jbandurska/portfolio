import { Component } from '@angular/core';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { EducationComponent } from './sections/education/education.component';
import { LanguagesComponent } from './sections/languages/languages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, EducationComponent, LanguagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
