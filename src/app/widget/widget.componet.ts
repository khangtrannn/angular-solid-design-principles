import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { JsonExporterService } from '../json-exporter.service';

@Component({
  selector: 'app-widget',
  template: `
    <div class="header">
      <h1>Weather</h1>
      <button mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
        border: #f0ebeb solid 1px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fafafa;
        width: 400px;
        margin-left: 20px;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
  standalone: true,
  imports: [MatDividerModule, MatIconModule, CommonModule],
})
export class WidgetComponent {
  @Input() widget!: string;

  private jsonExportService = inject(JsonExporterService);

  onExportJson(): void {
    this.jsonExportService.export();
  }
}
