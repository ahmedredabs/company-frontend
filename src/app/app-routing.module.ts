import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyRegisterFormComponent} from './company-register-form/company-register-form.component';
import { RegisterCompanyFormComponent } from 'app/register-company-form/register-company-form.component';

const routes: Routes = [
  { path: 'register', component: CompanyRegisterFormComponent }
];
  { path: 'addCompany', component: RegisterCompanyFormComponent }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
