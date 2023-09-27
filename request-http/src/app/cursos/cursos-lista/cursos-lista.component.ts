import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import {
  Observable,
  catchError,
  empty,
  Subject,
  take,
  switchMap,
  EMPTY,
} from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos2Service } from '../cursos2.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  //  public cursos: Curso[] = [];

  //  bsModalRef: BsModalRef | undefined;

  deleteModelRef: BsModalRef | undefined;
  @ViewChild('deleteModal') deleteModal: any;

  public cursos$: Observable<Curso[]> | undefined;
  public error$ = new Subject<boolean>();

  cursoSelecionado: Curso | undefined;

  constructor(
    private service: Cursos2Service,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    // this.service.list().subscribe((dados) => (this.cursos = dados));
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      catchError((error) => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );

    // this.service
    //   .list()
    //   .pipe(catchError((error) => empty()))
    //   .subscribe(
    //     (dados) => {
    //       console.log(dados);
    //     }
    //     // (error) => console.error(error),
    //     // () => console.log('Observable completo!')
    //   );
  }

  handleError() {
    this.alertService.showAlertDanger(
      'Erro ao carregar cursos. Tente novamente mais tarde.'
    );
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message =
    //   'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

  onEdit(id: number | string | null) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
    // this.deleteModelRef = this.modalService.show(this.deleteModal, {
    //   class: 'modal-sm',
    // });

    const result$ = this.alertService.showConfirm(
      'Confirmação',
      'Tem certeza que deseja remover esse curso?'
    );

    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) => (result ? this.service.remove(curso.id) : EMPTY))
      )
      .subscribe(
        (success) => {
          this.onRefresh();
        },
        (error) => {
          this.alertService.showAlertDanger(
            'Erro ao remover curso. Tente novamente mais tarde.'
          );
        }
      );
  }

  onConfirmDelete() {
    this.service.remove(this.cursoSelecionado?.id).subscribe(
      (success) => {
        this.onRefresh();
        this.deleteModelRef?.hide();
      },
      (error) => {
        this.alertService.showAlertDanger(
          'Erro ao remover curso. Tente novamente mais tarde.'
        );
        this.deleteModelRef?.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModelRef?.hide();
  }
}
