import { ejercicioService } from './ejercicio.service';
import { Component } from '@angular/core';
import { Usuario } from './ejercicio.interfaz';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PROJECT-ejerciciotabla';
}
