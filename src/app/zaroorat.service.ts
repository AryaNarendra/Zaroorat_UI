import { Injectable } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ZarooratService {

  ROOT_URL : String = "http://zarooratdev-env.eba-j8sb4n2i.ap-south-1.elasticbeanstalk.com/api";
  constructor(private http: HttpClient) { }
  // getServices() : Observable<Services[]> {
  //   return this.http.get<Services[]>('/allServices')
  // }
  getServices() : Observable<Services[]> {
    return this.http.get<Services[]>(this.ROOT_URL+'/allServices')
  }
  // getServices() : Observable<Services[]> {
  //   return this.http.get('http://zarooratdev-env.eba-j8sb4n2i.ap-south-1.elasticbeanstalk.com/allServices')
  //     .map((res: Response) => res.json())
  // }

  findByServiceName(serviceId : any) : Observable<Services> {
    return this.http.get('/api/services/'+serviceId)
    .map((res: Response) => {
     return res.json() as Services;
  })
  }
}
