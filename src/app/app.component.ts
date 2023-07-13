import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>

    <main class="content">
      <app-widget widget="weather"></app-widget>
      <app-widget widget="velocity"></app-widget>
    </main>
  `,
  styles: [
    `
      .content {
        background-color: #fff;
        padding: 2rem;
        height: calc(100vh - 64px);
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-solid-design-principles';
}
