import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Rotas';

  public mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.mostrarMenuEmmiter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
}
