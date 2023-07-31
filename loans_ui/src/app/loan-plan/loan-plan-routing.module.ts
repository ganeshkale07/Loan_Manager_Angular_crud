import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanPlanComponent } from './loan-plan.component';

const routes: Routes = [{ path: '', component: LoanPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanPlanRoutingModule { }
