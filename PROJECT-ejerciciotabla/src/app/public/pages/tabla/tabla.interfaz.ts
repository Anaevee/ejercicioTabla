export class DatosTabla {
  public name: string;
  public clase: number;
  public coche: string;
  public propietario: string;
  constructor(name: string, clase: number, coche: string, propietario: string) {
    this.name = name;
    this.clase = clase;
    this.coche = coche;
    this.propietario = propietario;
  }
}
