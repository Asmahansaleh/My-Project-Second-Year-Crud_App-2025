import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {
  private crud = environment.url + 'crud';
  constructor( private http:HttpClient ) { }

  addData(data:any): Observable<any>{
    return this.http.post(this.crud+"/addData",data)
  }
    getData(): Observable<any>{
    return this.http.get(this.crud+"/getData")
  }

  delete(id:any):Observable<any>{
    return this.http.delete(this.crud+"/"+id ,{ responseType: 'text' })
  }

   update(id:any,data:any):Observable<any>{
    return this.http.put(this.crud+"/"+id ,data)
  }
}
