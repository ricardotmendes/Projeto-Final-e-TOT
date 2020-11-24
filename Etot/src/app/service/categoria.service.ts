import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategorias(){
    return this.http.get('http://localhost:8080/categoria')
  }

  getByIdCategoria(id: number) {
    return this.http.get(`http://localhost:8080/categoria/${id}`, this.token)
  }

  postCategoria(categoria: Categoria){
    return this.http.post('http://localhost:8080/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria){
    return this.http.put('http://localhost:8080/categoria', categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`http://localhost:8080/categoria/${id}`, this.token) 
  }

}
