import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  private _svgWidth = Math.min(window.innerWidth, 1300);
  private _svgHeight = this.calcSvgHeight();
  private _path = '';

  get path() {
    return this._path;
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
      this._path = this.createPath();
    });

    window.addEventListener('load', () => {
      this._svgWidth = Math.min(window.innerWidth, 1300);
      this._svgHeight = this.calcSvgHeight();
      this._path = this.createPath();
    });
  }

  private calcSvgHeight(): number {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }

  private createPath(): string {
    const sectionMargin = 100;
    const svgMargin = 80;

    let path = '';

    // starting point
    path += `M ${svgMargin},0`;

    const sections = document.querySelectorAll('section');

    sections.forEach((section, i) => {
      const endOfSection = section.offsetTop + section.offsetHeight;
      const betweenSections = endOfSection + sectionMargin / 2;

      // the line on the left
      if (i % 2 === 0) {
        // vertical line
        path += `L ${svgMargin},${endOfSection}`;

        if (i !== sections.length - 1) {
          // first turn
          path += `Q ${svgMargin},${betweenSections} ${
            svgMargin + sectionMargin / 2
          },${betweenSections}`;

          // horizontal line
          path += `L ${
            this.svgWidth - svgMargin - sectionMargin / 2
          },${betweenSections}`;

          // second turn
          path += `Q ${this.svgWidth - svgMargin},${betweenSections} ${
            this.svgWidth - svgMargin
          },${endOfSection + sectionMargin}`;
        }
      }
      // the line on the right
      else {
        // vertical line
        path += `L ${this.svgWidth - svgMargin},${endOfSection}`;

        if (i !== sections.length - 1) {
          // first turn
          path += `Q ${this.svgWidth - svgMargin},${betweenSections} ${
            this.svgWidth - svgMargin - sectionMargin / 2
          },${betweenSections}`;

          // horizontal line
          path += `L ${svgMargin + sectionMargin / 2},${betweenSections}`;

          // second turn
          path += `Q ${svgMargin},${betweenSections} ${svgMargin},${
            endOfSection + sectionMargin
          }`;
        }
      }
    });

    path += `V ${this.svgHeight}`;

    return path;
  }
}
