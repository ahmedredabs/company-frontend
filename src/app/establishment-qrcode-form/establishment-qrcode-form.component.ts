import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EstablishmentService} from '../../services/establishment.service';
import {Qrcode} from '../../model/qrcode';
import {Location} from '../../model/location';

@Component({
  selector: 'app-company-qrcode-form',
  templateUrl: './establishment-qrcode-form.component.html',
  styleUrls: ['./establishment-qrcode-form.component.sass']
})
export class EstablishmentQrcodeFormComponent {

  qrcode: Qrcode;
  location: Location;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyQrcodeGeneratorService: EstablishmentService
  ) {
    this.qrcode = new Qrcode();
    this.location = new Location();
  }

  // TODO !!!
  // A tester !!!
  onSubmit() {
    this.location.establishment.id = localStorage.getItem('establishmentId');
    this.companyQrcodeGeneratorService.generateNewLocation(this.location).subscribe(response => {
      console.log(response.status);
      console.log(response.body);
      if (response.body !== null) {
        this.qrcode.location.id = response.body.id;
        // this.qrcode.location.establishment.id = localStorage.getItem('establishmentId');
        console.log('this.qrcode.location.id : ' + this.qrcode.location.id);
        console.log(this.qrcode);
        this.companyQrcodeGeneratorService.generateNewQRCode(this.qrcode).subscribe(response2 => console.log(response2.status));
      }
    });
  }

}
