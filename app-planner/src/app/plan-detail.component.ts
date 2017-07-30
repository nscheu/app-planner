import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Plan, Applications, AppComponent, ComponentTutorial } from './plan-model';

@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html'

})


export class PlanDetailComponent {
  planForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.planForm = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.required ],
      username: ['', Validators.required ],
      applications: this.fb.group({ // <-- the child FormGroup
        title: '',
        components: this.fb.group({ // <-- the child FormGroup
          title: '',
          description: '',
          url: '',
          componentTutorials: this.fb.group({ // <-- the child FormGroup
            title: '',
            url: ''
          })
        })
      })
    });
  }
}
