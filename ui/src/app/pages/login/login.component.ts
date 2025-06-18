import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginServicesService } from 'src/app/services/login/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }

  constructor(private loginServices:LoginServicesService,
    private route:Router
  ){

  }



Authenication(username: any,password:any) {
  this.loginServices.Authenticate(username,password).subscribe(
    (respo: any) => {
      if (Array.isArray(respo) && respo.length > 0) {
        console.log(respo);
        
        // Access first user object from the array
        const user = respo[0]; 
        sessionStorage.setItem("username", user.username); 
        sessionStorage.setItem("user_id", user.user_id); 
        // sessionStorage.setItem("roles", user.role_name); 

        console.log(sessionStorage.getItem("user_id"));

        this.route.navigate(['/home']);
      } else {
        window.alert("Invalid Credential"); // Handle empty response
      }
    },
    (error) => {
      window.alert("Invalid Credential"); // Handle API errors
    }
  );
}


loginData:any={
  user_id:'',
  role_name:'',
  username:'',
  password:''

}
login(){
    // console.log(this.loginData)
    this.Authenication(this.loginData.username,this.loginData.password)
}
}
