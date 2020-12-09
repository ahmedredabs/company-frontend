import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EstablishmentService} from '../../services/establishment.service';
import {Establishment} from '../../model/establishment';

@Component({
  selector: 'app-company-login-form',
  templateUrl: './establishment-login-form.component.html',
  styleUrls: ['./establishment-login-form.component.sass']
})
export class EstablishmentLoginFormComponent {

  company: Establishment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyLoginService: EstablishmentService
  ) {
    this.company = new Establishment();
  }

  onSubmit() {
    this.companyLoginService.login(this.company).subscribe(
      result => {
        if (result.status === 200) {
          this.goToQRCodeGenerator();
          if (result.body !== null){
            const establishmentId = result.body.id;
            if (establishmentId != null) {
              sessionStorage.setItem('establishmentId', establishmentId);
              sessionStorage.setItem('establishmentName', result.body.name);
            }
          }
        }
      },
      error => alert('Wrong password or name !'));
  }

  // TODO !
  goToQRCodeGenerator() {
    this.router.navigate(['/qrcode']);
  }

}
