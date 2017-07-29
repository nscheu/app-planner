import { Component }              from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Reactive Forms</h1>
      <app-plan-detail></app-plan-detail>
    </div>`

})
export class AppComponent {
  title = 'App Planner App';
}
