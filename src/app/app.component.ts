import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
  `,
  styles: [
    `
      .widget-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
        color: orange;
      }
      .value {
        font-size: 24px;
        opacity: 0.7;
      }
      .widget-content {
        display: block;
        text-align: center;
        position: relative;
        min-width: 190px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-solid-design-principles';

  onExportJson(): void {
    let data = JSON.stringify({ weather: { is_sunny: true, temp: '+25' } });
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(data);
    let exportFileName = 'weather.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  }
}
