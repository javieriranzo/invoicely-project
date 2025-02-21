export class Cliente {

    id?: number; 
    nombre: string;
    apellido: string;
    dniCif: string;
    direccion: string;
    codigoPostal: string;
    poblacion: string;
    provincia: string;
    pais: string;
    telefono: string;
    email: string;

  constructor(nombre: string, apellido: string, dniCif: string, direccion: string, codigoPostal: string, poblacion: string, provincia: string, pais: string, telefono: string,email: string) {
    this.nombre = nombre; 
    this.apellido = apellido;
    this.dniCif = dniCif;
    this.direccion = direccion;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia; 
    this.pais = pais;
    this.telefono = telefono;
    this.email = email; 
  }
}