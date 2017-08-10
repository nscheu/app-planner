import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Plan, Application, AppComponent, ComponentTutorial } from './plan-model';

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
      applications: this.fb.array([]),
    });
  }

  setApplications(applications: Application[]) {
    const applicationFGs = applications.map(application => this.fb.group(application));
    const applicationFormArray = this.fb.array(applicationFGs);
    this.planForm.setControl('applications', applicationFormArray);
  }

  addApp() {
    // this.application.push(this.fb.group(new Application()));
  }
}

