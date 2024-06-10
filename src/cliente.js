export default class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
      this.nombre = nombre;
      this.montoBrutoAnual = montoBrutoAnual;
      this.deducciones = deducciones;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(valor) {
      this._nombre = valor;
    }
  
    get montoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  
    set montoBrutoAnual(valor) {
      this._montoBrutoAnual = valor;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(valor) {
      this._deducciones = valor;
    }
  }
  