export class Cliente {
    constructor(
      public nombre: string = '',
      public apellido: string = '',
      public dniCif: string = '',
      public direccion: string = '',
      public codigoPostal: string = '',
      public poblacion: string = '',
      public provincia: string = '',
      public pais: string = '',
      public telefono: string = '',
      public email: string = ''
    ) {}
  }