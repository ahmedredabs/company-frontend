import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Qrcode} from '../model/qrcode';
import {Establishment} from '../model/establishment';
import {Location} from '../model/location';

@Injectable()
export class EstablishmentService {

  private readonly establishmentRegisterUrl: string;
  private readonly establishmentLoginUrl: string;
  private readonly establishmentGenerateQRCodeUrl: string;
  private readonly establishmentGenerateNewLocation: string;

  constructor(private http: HttpClient) {
    this.establishmentRegisterUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/establishment/register';
    this.establishmentLoginUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/establishment/login';
    this.establishmentGenerateQRCodeUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/establishment/qrcode';
    this.establishmentGenerateNewLocation = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/establishment/location';
  }

  public save(establishment: Establishment) {
    return this.http.post<Establishment>(this.establishmentRegisterUrl, establishment, {observe: 'response'});
  }

  public login(establishment: Establishment) {
    return this.http.post<Establishment>(this.establishmentLoginUrl, establishment, {observe: 'response'});
  }

  public generateNewQRCode(qrcode: Qrcode) {
    console.log('Je passe dans generateNewQRCode');
    console.log(qrcode);
    return this.http.post<Qrcode>(this.establishmentGenerateQRCodeUrl, qrcode, {observe: 'response'});
  }

  public generateNewLocation(location: Location) {
    console.log('Je passe dans generateNewLocation');
    return this.http.post<Location>(this.establishmentGenerateNewLocation, location, {observe: 'response'});
  }

}
