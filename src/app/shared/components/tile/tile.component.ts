import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export class TileComponent {
  @Input({ required: true }) path: string = "assets/icons/mail.svg";
  @Input() title?: string;
}
