import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  public usuario: any = {
    nome: 'Savio',
    email: 'savio@teste.com',
  };
  public onSubmit(form: any) {
    console.log(form);
    console.log(this.usuario);
  }
}
