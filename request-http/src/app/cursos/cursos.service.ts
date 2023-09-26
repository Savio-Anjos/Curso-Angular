import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { Observable, delay, take, tap } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API: string = `${environment.API}cursos`;

  constructor(private http: HttpClient) {}

  public list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API).pipe(delay(2000), tap(console.log));
  }

  loadByID(id: number | string) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  create(curso: Curso) {
    return this.http.post(this.API, curso).pipe(take(1));
  }
}
