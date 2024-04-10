import { Component, inject } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  barService = inject(ProgressBarService);

  get viewBox(): string {
    return `0 0 ${this.barService.svgWidth} ${this.barService.svgHeight}`;
  }
}
