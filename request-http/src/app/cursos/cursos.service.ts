import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API: string = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) {}

  public list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API).pipe(tap(console.log));
  }
}
