import { Usuario } from './ejercicio.interfaz';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ejercicioService {
  CLAVE_LOCAL_STORAGE = 'tareas_angular';

  constructor() {}

  obtenerUsuario(): string {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || '');
  }
  guardarUsuario(tareas: Usuario) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas));
  }
}
