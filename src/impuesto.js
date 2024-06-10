export default class Impuesto {
    constructor(cliente) {
      this.cliente = cliente;
    }
  
    calcularImpuesto() {
      return (this.cliente.montoBrutoAnual - this.cliente.deducciones) * 0.21;
    }
  }
  