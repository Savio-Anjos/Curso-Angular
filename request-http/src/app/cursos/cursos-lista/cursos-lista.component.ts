import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  //  public cursos: Curso[] = [];

  public cursos$: Observable<Curso[]> | undefined;

  constructor(private service: CursosService) {}

  public ngOnInit(): void {
    // this.service.list().subscribe((dados) => (this.cursos = dados));
    this.cursos$ = this.service.list();
  }
}
