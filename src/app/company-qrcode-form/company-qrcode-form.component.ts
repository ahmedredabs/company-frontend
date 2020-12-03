import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../services/company.service';
import {Company} from '../../model/company';
import {Qrcode} from '../../model/qrcode';

@Component({
  selector: 'app-company-qrcode-form',
  templateUrl: './company-qrcode-form.component.html',
  styleUrls: ['./company-qrcode-form.component.sass']
})
export class CompanyQrcodeFormComponent {

  qrcode: Qrcode;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyQrcodeGeneratorService: CompanyService
  ) {
    this.qrcode = new Qrcode();
  }

  onSubmit() {
    this.companyQrcodeGeneratorService.;
  }

}
