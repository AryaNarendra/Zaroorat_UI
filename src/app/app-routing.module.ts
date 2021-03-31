import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import {ProfessionalComponent} from './professional/professional.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginProfessionalComponent } from './login-professional/login-professional.component';


const routes: Routes = [

];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
