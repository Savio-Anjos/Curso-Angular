import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent {
  cursos: string[] = [];
  // cursoService: CursosService;

  constructor(private cursosService: CursosService) {
    // this.cursoService = new CursosService();
    //this.cursoService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.cursosService.emitirCursoCriado.subscribe((curso) =>
      console.log(curso)
    );
  }
}
