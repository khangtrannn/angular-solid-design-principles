import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { WidgetContent } from './widget-content';

@Component({
  selector: 'app-weather-content',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <h5>Currently</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>
  `,
  styleUrls: [
    './widget-content.scss'
  ]
})
export class WeatherContentComponent implements WidgetContent {
  id: string = '';
  loading: boolean = false;

  reload(): void {
    console.log('...do polling...');
  }
}
