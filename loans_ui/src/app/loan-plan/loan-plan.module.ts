import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanPlanRoutingModule } from './loan-plan-routing.module';
import { LoanPlanComponent } from './loan-plan.component';


@NgModule({
  declarations: [
    LoanPlanComponent
  ],
  imports: [
    CommonModule,
    LoanPlanRoutingModule
  ]
})
export class LoanPlanModule { }
