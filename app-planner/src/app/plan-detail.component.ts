import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  template: `<h2>Hero Detail</h2>
  <h3><i>Just a FormControl</i></h3>
<label class="center-block">Name:
<input class="form-control" [formControl]="name">
  </label>`
})

export class PlanDetailComponent {
  name = new FormControl();
}
