import { Component } from '@angular/core';
import { TileComponent } from '../../shared/components/tile/tile.component';
import { SvgIconComponent } from '../../shared/components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TileComponent, SvgIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
