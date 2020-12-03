import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompanyRegisterFormComponent} from './company-register-form/company-register-form.component';
import {CompanyLoginFormComponent} from './company-login-form/company-login-form.component';
import {CompanyService} from '../services/company.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CompanyRegisterFormComponent,
    CompanyLoginFormComponent
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
