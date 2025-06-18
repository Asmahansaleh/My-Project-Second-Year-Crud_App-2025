import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private user = environment.url + 'login';
  constructor( private http:HttpClient ) { }


  // getAllProduct():Observable<any>{
  //   return this.http.get(this.product+ "/allProducts");
  // }

  // getAllProducwithCategoryt():Observable<any>{
  //   return this.http.get(this.product+ "/getAllProductwithCategories");
  // }
  
  // getgetUser_InfoById(id:any):Observable<any>{
  //   return this.http.get(this.user_details + "/getUserById/" + id);
  // }

  // updateBank(id:any,data:any){
  //   return this.http.put(this.godown+"/addGodown"+id,data);
  // }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  // Authenticate(data:any):Observable<any>{
  
  //   return this.http.post(this.user+"/authenticate",data);
  // }
  Authenticate(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.get(this.user + '/authenticated', { params });
  }

}
