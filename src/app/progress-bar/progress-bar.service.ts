import { Injectable } from '@angular/core';

interface Coordinates {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  type: 'line' | 'left' | 'right';
}

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  private _svgWidth = Math.min(window.innerWidth, 1300);
  private _svgHeight = this.calcSvgHeight();
  private _cords: Coordinates[] = [];

  get cords() {
    return this._cords;
  }

  get svgWidth(): number {
    return this._svgWidth;
  }

  get svgHeight(): number {
    return this._svgHeight;
  }

  constructor() {
    window.addEventListener('resize', () => {
      this._svgWidth = Math.min(window.innerWidth, 1300);
      this._svgHeight = this.calcSvgHeight();

      this.getSectionsCords();
    });

    window.addEventListener('load', () => {
      this._svgWidth = Math.min(window.innerWidth, 1300);
      this._svgHeight = this.calcSvgHeight();

      this.getSectionsCords();
    });
  }

  private calcSvgHeight(): number {
    const body = document.body;

    return Math.max(body.scrollHeight, body.offsetHeight);
  }

  private getSectionsCords(): void {
    const sections = document.querySelectorAll('section');

    this._cords = [];

    sections.forEach((section, i) => {
      console.log(section);

      const xCord = i % 2 === 0 ? 100 : this.svgWidth - 100;
      const xCord2 = !(i % 2 === 0) ? 100 : this.svgWidth - 100;

      const cord: Coordinates = {
        x1: xCord,
        x2: xCord,
        y1: section.offsetTop,
        y2: section.offsetTop + section.offsetHeight,
        type: 'line',
      };

      const firstTurn: Coordinates = {
        ...cord,
        type: i % 2 === 0 ? 'left' : 'right',
      };

      const secondTurn: Coordinates = {
        ...cord,
        x1: xCord2,
        x2: xCord2,
        type: !(i % 2 === 0) ? 'left' : 'right',
      };

      this._cords.push(firstTurn);
      this._cords.push(cord);
      this._cords.push(secondTurn);
    });
  }
}
