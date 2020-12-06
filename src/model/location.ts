import {Establishment} from './establishment';

export class Location {
  id: string = '';
  name: string = '';
  description: string = '';
  establishment: Establishment = new Establishment();
}
