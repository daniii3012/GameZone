import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API}/user `);
  }

  //Obtener Solo uno (sospecho que falta el respectivo en el folder server)
  getUser(id: string){
    return this.http.get(`${this.API}/user/${id}`);
  }
   
  saveUser(user: User){
    return this.http.post(`${this.API}/user`, user);
  }

  //Verificar la existencia del usuario

  checkUser(id: string, pass: string){
    return this.http.get(`${this.API}/user/${id}/${pass}`);
  }


  //Eliminar (diria que tambien falta el respectivo en el folder server)

  deleteUser(id: string){
    return this.http.delete(`${this.API}/user/${id}`);
  }

  updateUser(id: string, updateUser: User){
    return this.http.put(`${this.API}/user/${id}`, updateUser);
  }
}
