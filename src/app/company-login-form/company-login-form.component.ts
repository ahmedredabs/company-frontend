import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../model/company';

@Component({
  selector: 'app-company-login-form',
  templateUrl: './company-login-form.component.html',
  styleUrls: ['./company-login-form.component.sass']
})
export class CompanyLoginFormComponent {

  company: Company;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyLoginService: CompanyService
  ) {
    this.company = new Company();
  }

  onSubmit(){
    this.companyLoginService.login(this.company).subscribe(result => this.goToQRCodeGenerator());
  }

  // TODO !
  goToQRCodeGenerator(){
    this.router.navigate(['/']);
  }

}
