import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base [nome]="nome" [valor]="valor" estilo="bg-primary">
    </app-poc-base>
  `,
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {
  nome = 'Componente com takeUntil';
  valor: string | undefined;

  unsub$: Subject<unknown> = new Subject();

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((novoValor) => (this.valor = novoValor));
    takeUntil(this.unsub$);
  }

  ngOnDestroy(): void {
    this.unsub$.next(this.valor);
    this.unsub$.complete();
    console.log(`${this.nome} foi destruido`);
  }
}
