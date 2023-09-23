import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  public ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // })

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });
  }

  public onSubmit() {
    this.http.post('https://httpbin.org/post', JSON.stringify({})).subscribe(
      (dados) => {
        console.log(dados);
        // reseta o form
        // this.formulario.reset();
        this.resetar();
      },
      (error: any) => alert('erro')
    );
  }

  public resetar() {
    this.formulario.reset();
  }
}
