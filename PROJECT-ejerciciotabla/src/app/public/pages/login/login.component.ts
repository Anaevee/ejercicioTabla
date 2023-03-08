import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ejercicioService } from '../../../ejercicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  inicioSesion: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private ejercicioService: ejercicioService,
    private router: Router
  ) {}

  guardarUsuario() {
    let tarea = this.inicioSesion.value.name;
    this.ejercicioService.guardarUsuario(tarea);
    this.router.navigate(['/tabla']);
  }

  ngOnInit(): void {}
}
