import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyRegisterFormComponent } from './company-register-form/company-register-form.component';
import { RegisterCompanyFormComponent } from './register-company-form/register-company-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyRegisterFormComponent
    AppComponent,
    RegisterCompanyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
