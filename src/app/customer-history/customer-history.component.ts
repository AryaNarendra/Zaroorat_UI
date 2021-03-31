import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {

  constructor(private router : Router) { }

  back(){
    this.router.navigate(['/booking']);

  }

  logout(){    
    this.router.navigate(['']);
}
  ngOnInit() {
  }

}
