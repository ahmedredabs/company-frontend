import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EstablishmentService} from '../../services/establishment.service';
import {Establishment} from '../../model/establishment';

@Component({
  selector: 'app-company-register-form',
  templateUrl: './establishment-register-form.component.html',
  styleUrls: ['./establishment-register-form.component.sass']
})
export class EstablishmentRegisterFormComponent {

  establishment: Establishment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyRegisterService: EstablishmentService
  ) {
    this.establishment = new Establishment();
  }

  onSubmit(){
    this.companyRegisterService.save(this.establishment).subscribe(result => {
      this.goToHome();
    });
  }

  goToHome(){
    this.router.navigate(['/']);
  }

}
