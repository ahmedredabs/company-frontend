import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompanyRegisterFormComponent} from './company-register-form/company-register-form.component';
import {CompanyLoginFormComponent} from './company-login-form/company-login-form.component';
import {CompanyService} from '../services/company.service';
import {HttpClientModule} from '@angular/common/http';
import { CompanyQrcodeFormComponent } from './company-qrcode-form/company-qrcode-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyRegisterFormComponent,
    CompanyLoginFormComponent,
    CompanyQrcodeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
