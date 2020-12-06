import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstablishmentService } from '../../services/establishment.service';
import { Qrcode } from '../../model/qrcode';
import { Location } from '../../model/location';
import { Establishment } from 'model/establishment';

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
      if (response.body !== null) {
        this.qrcode.location.id = response.body.id.toString();
        // this.qrcode.location.establishment.id = localStorage.getItem('establishmentId');
        this.qrcode.location.establishment = new Establishment();
        this.companyQrcodeGeneratorService.generateNewQRCode(this.qrcode).subscribe(response2 => response2.status);
      }
    });
  }

}
