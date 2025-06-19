import { HttpStatusCode } from '@angular/common/http';
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
  showSave:boolean=true
   showUpdate:boolean=false
  Crud :any ={
     crud_id:'',
     full_name:'',
     gender : '',
     dob:'',
     address:''
  }

  SaveCrudFunction(data:any){
    this.crudServices.addData(data).subscribe(
      (respo:any)=>{
        console.log(respo)
         location.reload()
        this.getAllData()
      }
    )
  }

  saveCrud(){
    this.SaveCrudFunction(this.Crud)

    console.log(this.Crud)
   
  }
Data:any
  getAllData(){
    this.crudServices.getData().subscribe(
      (respo:any)=>{
        
        this.Data = respo
        // console.log(respo)
      }
    )
  }

  update(updateData:any){
    this.showUpdate=true
    this.showSave=false
    this.Crud=updateData
    console.log(updateData)

  }
  updateFunction(id:any,data:any){
    this.crudServices.update(id,data).subscribe(
       (response: any) => {
        window.alert("Update successfully");
        location.reload()
        this.getAllData();
      },
      (error) => {
        console.error("Update failed", error);
      }
    )

  }
  updateCrud(){
      this.updateFunction(this.Crud.crud_id,this.Crud)
  }

  deleteFunction(id: any) {
    this.crudServices.delete(id).subscribe(
      (response: any) => {
        window.alert("Deleted successfully");
        this.getAllData();
      },
      (error) => {
        console.error("Delete failed", error);
      }
    );
  }

delete(id: any) {
  if (window.confirm("Are you sure you want to delete?")) {
    this.deleteFunction(id);
  }
}

}
