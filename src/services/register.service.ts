import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from 'model/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl: string;

  constructor(private http: HttpClient) {
    this.registerUrl = 'https://pfe-spring-angular.herokuapp.com/addCompany';// a changer
  } 
  public findAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.registerUrl);
  }

  public save(greeting: Company) {
    return this.http.post<Company>(this.registerUrl, greeting);
  }
}
