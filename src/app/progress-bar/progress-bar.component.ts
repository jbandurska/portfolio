import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent implements OnInit {
  @ViewChild('path') path!: ElementRef<SVGPathElement>;
  @ViewChild('pathBlur') pathBlur!: ElementRef<SVGPathElement>;

  barService = inject(ProgressBarService);

  get viewBox(): string {
    return `0 0 ${this.barService.svgWidth} ${this.barService.svgHeight}`;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.updatePaths();
    });

    window.addEventListener('resize', () => {
      this.updatePaths();
    });

    window.addEventListener('load', () => {
      this.updatePaths();
    });
  }

  private updatePaths(): void {
    const path = this.path.nativeElement;
    const pathBlur = this.pathBlur.nativeElement;

    this.updateDashoffset(path);
    this.updateDashoffset(pathBlur);
  }

  private updateDashoffset(el: SVGPathElement) {
    const pathEl = el;
    const pathLength = pathEl.getTotalLength();

    const percentage =
      window.scrollY / (this.barService.svgHeight - window.innerHeight);

    pathEl.style.opacity = '100%';
    pathEl.style.strokeDasharray = pathLength.toString();
    pathEl.style.strokeDashoffset = (pathLength * (1 - percentage)).toString();
  }
}
