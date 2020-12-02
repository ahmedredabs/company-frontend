import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyRegisterFormComponent} from 'app/company-register-form/company-register-form.component';


const routes: Routes = [
  { path: 'register', component: CompanyRegisterFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
