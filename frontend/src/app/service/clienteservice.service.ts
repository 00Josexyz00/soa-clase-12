import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cliente} from './Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteserviceService {

  URL = "http://localhost:8080/clientes";
  constructor( private httpc:HttpClient) { }

  //GET
  getClientes(): Observable<Cliente[]> {
    return this.httpc.get<Cliente[]>(this.URL);
  }

  //POST

  addClinetes(nombre:string, apellido:string, direccion:string, telefono:string, email:string)
  {
    let obj ={nombre,apellido,direccion,telefono,email}
    return this.httpc.post(this.URL,obj);

  }


}
