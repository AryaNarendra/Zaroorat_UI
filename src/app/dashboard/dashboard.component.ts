import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { ZarooratService } from '../zaroorat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  services : Services[];
  constructor(private zarooratService: ZarooratService, private router : Router) { }

  

  book(serviceId, serviceName){
    localStorage.setItem("serviceId",serviceId)
    localStorage.setItem("serviceName",serviceName)
    this.router.navigate(['/booking']);
    // console.log(serviceId);
    // console.log(serviceName);
  }

  login(){
    this.router.navigate(['/login-customer']);

  }

  ngOnInit() {

    this.zarooratService.getServices().subscribe((data: Services[])=>{
      console.log(data);
      this.services = data;
    })  
  }

}
