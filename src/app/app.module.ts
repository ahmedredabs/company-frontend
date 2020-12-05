import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EstablishmentRegisterFormComponent} from './establishment-register-form/establishment-register-form.component';
import {EstablishmentLoginFormComponent} from './establishment-login-form/establishment-login-form.component';
import {EstablishmentService} from '../services/establishment.service';
import {HttpClientModule} from '@angular/common/http';
import { EstablishmentQrcodeFormComponent } from './establishment-qrcode-form/establishment-qrcode-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EstablishmentRegisterFormComponent,
    EstablishmentLoginFormComponent,
    EstablishmentQrcodeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EstablishmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
