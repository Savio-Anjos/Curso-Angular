import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.scss'],
})
export class ConfirmModelComponent {
  @Input() title!: string;
  @Input() msg!: string;
  @Input() cancelTxt: string = 'Cancelar';
  @Input() okTxt: string = 'Sim';

  confirmResult!: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) {
    this.confirmResult = new Subject();
  }

  onConfirm() {
    this.confirmAndClode(true);
  }

  onClose() {
    this.confirmAndClode(false);
  }

  private confirmAndClode(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }
}
