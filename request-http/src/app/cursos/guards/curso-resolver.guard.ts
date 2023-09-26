import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Curso } from '../curso';
import { Observable, empty, of } from 'rxjs';
import { CursosService } from '../cursos.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CursoResolverGuard implements Resolve<Curso> {
  constructor(private service: CursosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Curso> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']).pipe(
        catchError(() => {
          return empty();
        })
      );
    } else {
      return of({
        id: null,
        nome: null,
      });
    }
  }
}
