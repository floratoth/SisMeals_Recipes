import { Recipe } from './../model/recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  apiUrl: string = "https://nettuts.hu/jms/floratoth/universities";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  create(entity: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiUrl}`, entity);
  }

  update(entity: Recipe): Observable<Recipe> {
    return this.http.patch<Recipe>(`${this.apiUrl}/${entity.id}`, entity);
  }

  delete(entity: Recipe): Observable<Recipe> {
    return this.http.delete<any>(`${this.apiUrl}/${entity.id}`);
  }
}
