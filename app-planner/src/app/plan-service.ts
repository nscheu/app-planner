import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Plan } from './plan-model';
import { PLANDATA } from './mock-plans';

@Injectable()
export class PlanService {

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getPlans(): Observable<Plan[]> {
    return of(PLANDATA).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateHero(plan: Plan): Observable<Plan>  {
    const oldPlan = PLANDATA.find(h => h.user_id === plan.user_id);
    const newPlan = Object.assign(oldPlan, plan); // Demo: mutate cached hero
    return of(newPlan).delay(this.delayMs); // simulate latency with delay
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
