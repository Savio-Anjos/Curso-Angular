import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  public mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  public fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmmiter.emit(true);

      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmmiter.emit(false);
    }
  }

  public usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
