import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EstablishmentRegisterFormComponent} from 'app/establishment-register-form/establishment-register-form.component';
import {EstablishmentLoginFormComponent} from './establishment-login-form/establishment-login-form.component';
import {EstablishmentQrcodeFormComponent} from './establishment-qrcode-form/establishment-qrcode-form.component';


const routes: Routes = [
  {path: 'register', component: EstablishmentRegisterFormComponent},
  {path: 'login', component: EstablishmentLoginFormComponent},
  {path: 'qrcode', component: EstablishmentQrcodeFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
