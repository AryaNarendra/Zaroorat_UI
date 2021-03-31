import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { professionalPojo } from './professionalPojo';

@Injectable()
export class ProfessionalService {

  ROOT_URL : String = "http://zarooratdev-env.eba-j8sb4n2i.ap-south-1.elasticbeanstalk.com/api";
 
  constructor(private http: HttpClient) { }

  getServices() : Observable<professionalPojo> {
    return this.http.get<professionalPojo>(this.ROOT_URL+'/allProfessionals')
  }
   
  findByProfessionName(profession : string) : Observable<professionalPojo> {
    return this.http.get<professionalPojo>(this.ROOT_URL+'/professional/'+profession)
 
  }
}
