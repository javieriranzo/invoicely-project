// factura.model.ts
import { Cliente } from './cliente.model';
import { LineaFactura } from './linea-factura.model';

export class Factura {
  
  public lineas: LineaFactura[] = [];
  public descuento: number = 0;
  public iva: number = 21;
  public subtotal: number = 0;
  public totalConDescuento: number = 0;
  public totalConIVA: number = 0;

  constructor(public cliente: Cliente) {}

  // Método para actualizar el subtotal sumando los totales de cada línea
  actualizarSubtotal(): void {
    this.subtotal = this.lineas.reduce((total, linea) => total + linea.total, 0);
    this.actualizarTotalConDescuento();
  }

  // Método para actualizar el total con descuento
  actualizarTotalConDescuento(): void {
    const descuentoAplicado = (this.descuento / 100) * this.subtotal;
    this.totalConDescuento = this.subtotal - descuentoAplicado;
    this.actualizarTotalConIVA();
  }

  // Método para actualizar el total con IVA
  actualizarTotalConIVA(): void {
    this.totalConIVA = this.totalConDescuento * (1 + this.iva / 100);
  }

  // Método para agregar una línea y actualizar los totales
  agregarLinea(linea: LineaFactura): void {
    this.lineas.push(linea);
    this.actualizarSubtotal();
  }

  // Método para eliminar una línea y actualizar los totales
  eliminarLinea(index: number): void {
    if (index >= 0 && index < this.lineas.length) {
      this.lineas.splice(index, 1);
      this.actualizarSubtotal();
    }
  }
}
