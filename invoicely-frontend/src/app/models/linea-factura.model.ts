// linea-factura.model.ts
export class LineaFactura {
  public total: number = 0;

  constructor(
    public nombre: string,
    public descripcion: string,
    public precio: number,
    public cantidad: number = 1
  ) {
    this.actualizarTotal();
  }

  // Método para actualizar el total de esta línea
  actualizarTotal(): void {
    this.total = this.precio * this.cantidad;
  }
}
