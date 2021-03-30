import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { ProfessionalService } from '../professional.service';
import { professionalPojo } from '../professionalPojo';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  serviceId : string;
  serviceName : string;

  professional : Observable<professionalPojo>;
  prof : professionalPojo;


  constructor(private router : Router, private professionalService:ProfessionalService) {
    this.serviceId = localStorage.getItem("serviceId");

    this.serviceName = localStorage.getItem("serviceName");
    console.log(this.serviceId);
    console.log(this.serviceName);
    // this.professional = this.professionalService.findByProfessionName(this.serviceName);

    this.professionalService.findByProfessionName(localStorage.getItem("serviceName")).subscribe(x=>{
      this.prof=x;
      console.log(this.prof);
      localStorage.setItem('professional',
      JSON.stringify(x));
     
      });


   }


   bookingConfirm(){
    this.router.navigate(['/confirm-booking']);
  }

  ngOnInit() {

    this.serviceName = localStorage.getItem("serviceName");
    this.professional = this.professionalService.findByProfessionName(this.serviceName);
    // console.log(this.professional);


  }

}
