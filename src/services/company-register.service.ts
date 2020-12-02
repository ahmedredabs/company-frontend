import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from '../model/company';

@Injectable()
export class CompanyRegisterService {

  private companyRegisterUrl: string;

  constructor(private http: HttpClient) {
    this.companyRegisterUrl = 'http://localhost:8080/company/register';
  }

  public save(company: Company){
    return this.http.post<Company>(this.companyRegisterUrl, company);
  }

}
