import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSchema } from '../../Models/userSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL ="http://localhost:3000"
  constructor(private http:HttpClient) { }

  addUserAPI(user:userSchema){
    return this.http.post(`${this.SERVER_URL}/users`,user)
  }

getAllUserAPI(){
  return this.http.get(`${this.SERVER_URL}/users`)
}

getSingleUserAPI(id:string){
  return this.http.get(`${this.SERVER_URL}/users/${id}`)
}

updateUserAPI(userId:string,userDetails:userSchema){
  return this.http.put(`${this.SERVER_URL}/users/${userId}`,userDetails)
}

removeUserAPI(userId:string){
  return this.http.delete(`${this.SERVER_URL}/users/${userId}`)
}


}
