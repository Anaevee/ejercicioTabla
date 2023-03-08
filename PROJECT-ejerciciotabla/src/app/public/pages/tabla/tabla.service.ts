import { DatosTabla } from './tabla.interfaz';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaService {
  private REST_API_SERVER = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}
  getDatosUsuarios(name: string): Observable<DatosTabla[]> {
    return this.httpClient.get<DatosTabla[]>(
      this.REST_API_SERVER + '/datos?propietario=' + name
    );
  }
}
