import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../model/company';
import {environment} from '../environments/environment';
import {Qrcode} from '../model/qrcode';

@Injectable()
export class CompanyService {

  private readonly companyRegisterUrl: string;
  private readonly companyLoginUrl: string;
  private readonly companyGenerateQRCodeUrl: string;

  constructor(private http: HttpClient) {
    this.companyRegisterUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/company/register';
    this.companyLoginUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/company/login';
    this.companyGenerateQRCodeUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/company/qrcode';
  }

  public save(company: Company) {
    return this.http.post<Company>(this.companyRegisterUrl, company);
  }

  public login(company: Company) {
    return this.http.post<Company>(this.companyLoginUrl, company);
  }

  public GenerateNewQRCode(qrcode: Qrcode) {
    return this.http.post<Qrcode>(this.companyGenerateQRCodeUrl, qrcode);
  }

}
