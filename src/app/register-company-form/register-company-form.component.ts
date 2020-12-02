import { Component, OnInit } from '@angular/core';
import { Company } from "model/company";
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'services/register.service';

@Component({
  selector: 'app-register-company-form',
  templateUrl: './register-company-form.component.html',
  styleUrls: ['./register-company-form.component.sass']
})
export class RegisterCompanyFormComponent  implements OnInit{

  company : Company

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private registerService : RegisterService){
    this.company = new Company();
  }
  onSubmit() {
    this.registerService.save(this.company);
  }
  ngOnInit() {}
}
