import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var FB : any;
@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {
  @ViewChild('loginRef',) loginElement: ElementRef;

  auth2 :any;
  user: any;
  constructor(private router : Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
   }
  ngOnInit() {
    this.user = {
      method : null,
      response : null,
      token: null
    };
    
    this.googleSDK();

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '922684538506683',
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0'
      });
      FB.AppEvents.logPageView();
      
    };
  
    
  }

  googleSDK() {
 
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '595815735583-1vq45v06vmvuubi5ru1ok78noiclam6h.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }
   
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
   
  }
  prepareLoginButton() {
 
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
   
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
        this.user.method = "google";
        this.user.token = googleUser.getAuthResponse().id_token;
        this.user.response = {
          id: profile.getId(),
          name: profile.getName(),
          imageURL: profile.getImageUrl(),
          email: profile.getEmail()
        };
        localStorage.setItem("User", this.user);

        localStorage.setItem("ID", profile.getId());
        localStorage.setItem("Name", profile.getName());
        localStorage.setItem("Email", profile.getEmail());
        console.log(localStorage.getItem("Name"));
        this.router.navigate(['/dashboard']);
   
   
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
   
  }
  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
           console.log('Yahoo')
           this.user.method = "facebook";
           this.user.token = response.authResponse.accessToken;
           this.testAPI()
          }
           else
           {
           console.log('User login failed');
         }
      });

  }


  testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log(response)
      this.user.response = response;
      console.log('Successful login for: ' + response.name);
        console.log('Thanks for logging in, ' + response.name + '!');
        localStorage.setItem("Name", response.name)
        localStorage.setItem("User", this.user);
    });
    
  }
}
