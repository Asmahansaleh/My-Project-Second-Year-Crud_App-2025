import { Component } from '@angular/core';
import { CrudServicesService } from 'src/app/services/CrudServices/crud-services.service';

@Component({
  selector: 'app-darsh',
  templateUrl: './darsh.component.html',
  styleUrls: ['./darsh.component.css']
})
export class DarshComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllData()
  }
constructor(private crudServices:CrudServicesService){

}
  Crud :any ={
     crud_id:'',
     full_name:'',
     gender : '',
     dob:'',
     address:''
  }

  saveCrud(){
    console.log(this.Crud)
  }

  getAllData(){
    this.crudServices.getData().subscribe(
      (respo:any)=>{
        console.log(respo)
      }
    )
  }
}
