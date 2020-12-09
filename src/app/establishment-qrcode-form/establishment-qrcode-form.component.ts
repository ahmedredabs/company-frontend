import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EstablishmentService} from '../../services/establishment.service';
import {Qrcode} from '../../model/qrcode';
import {Location} from '../../model/location';
import {NgxQrcodeElementTypes} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-company-qrcode-form',
  templateUrl: './establishment-qrcode-form.component.html',
  styleUrls: ['./establishment-qrcode-form.component.sass'],
})
export class EstablishmentQrcodeFormComponent {
  qrcode: Qrcode;
  location: Location;
  elementType = NgxQrcodeElementTypes.URL;
  value = '';
  showQrCode = false;
  href = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyQrcodeGeneratorService: EstablishmentService
  ) {
    this.qrcode = new Qrcode();
    this.location = new Location();
  }

  onSubmit() {
    this.location.establishment.id = sessionStorage.getItem('establishmentId');
    this.companyQrcodeGeneratorService
      .generateNewLocation(this.location)
      .subscribe((response) => {
        if (response.body !== null) {
          this.qrcode.location.id = response.body.id.toString();
          this.value = 'LocationID\n' + this.qrcode.location.id;
          this.companyQrcodeGeneratorService
            .generateNewQRCode(this.qrcode)
            .subscribe((response2) => {
              if (response2.status === 200) {
                if (response2.body !== null) {
                  this.showQrCode = true;
                  this.value += '\nQrCodeID\n' + response2.body.id.toString();
                }
              }
            });
        }
      });
  }

  downloadQRCode() {
    this.href = document.getElementsByTagName('img')[0].src;
  }

}
