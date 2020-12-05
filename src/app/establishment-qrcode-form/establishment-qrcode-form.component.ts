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
    this.location.establishment = localStorage.getItem('establishmentId');
    console.log(this.location.establishment);
    this.companyQrcodeGeneratorService.generateNewLocation(this.location).subscribe(response => console.log(response.status));
    this.qrcode.location = this.location.id;
    this.companyQrcodeGeneratorService.generateNewQRCode(this.qrcode);
  }

}
