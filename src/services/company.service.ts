import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../model/company';
import {environment} from '../environments/environment';

@Injectable()
export class CompanyService {

  private readonly companyRegisterUrl: string;
  private readonly companyLoginUrl: string;

  constructor(private http: HttpClient) {
    this.companyRegisterUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/company/register';
    this.companyLoginUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/company/login';
  }

  public save(company: Company) {
    return this.http.post<Company>(this.companyRegisterUrl, company);
  }

  public login(company: Company) {
    return this.http.post<Company>(this.companyLoginUrl, company);
  }

}
