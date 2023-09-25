import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable, catchError, empty, Subject } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  //  public cursos: Curso[] = [];

  public cursos$: Observable<Curso[]> | undefined;
  public error$ = new Subject<boolean>();

  constructor(private service: CursosService) {}

  public ngOnInit(): void {
    // this.service.list().subscribe((dados) => (this.cursos = dados));
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      catchError((error) => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );

    this.service
      .list()
      .pipe(catchError((error) => empty()))
      .subscribe(
        (dados) => {
          console.log(dados);
        }
        // (error) => console.error(error),
        // () => console.log('Observable completo!')
      );
  }
}
