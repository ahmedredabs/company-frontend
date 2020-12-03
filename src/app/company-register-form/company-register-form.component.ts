import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../model/company';

@Component({
  selector: 'app-company-register-form',
  templateUrl: './company-register-form.component.html',
  styleUrls: ['./company-register-form.component.sass']
})
export class CompanyRegisterFormComponent {

  company: Company;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyRegisterService: CompanyService
  ) {
    this.company = new Company();
  }

  onSubmit(){
    this.companyRegisterService.save(this.company).subscribe(result => this.goToHome());
  }

  goToHome(){
    this.router.navigate(['/']);
  }

}
