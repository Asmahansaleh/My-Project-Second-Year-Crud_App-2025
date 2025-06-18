import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  user_roles: any;
  showAdmin: boolean = false;
  showOffice: boolean = false;
  showProduction: boolean = false;
  
  ngOnInit(): void {
    this.user_roles = sessionStorage.getItem("roles")?.toLowerCase();
  
    if (this.user_roles === "admin") {
      this.showAdmin = true;
      this.showOffice = true;
      this.showProduction = true;
    } else if (this.user_roles === "staff") {
      this.showOffice = true;
    } else if (this.user_roles === "production") {
      this.showProduction = true;
    }
  }
  
    
  }



