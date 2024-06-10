import Cliente from './Cliente.js';
import Impuesto from './Impuesto.js';

const cliente1 = new Cliente('Juan Pérez', 100000, 20000);
const impuesto1 = new Impuesto(cliente1);

console.log(`El impuesto anual a pagar por ${cliente1.nombre} es: ${impuesto1.calcularImpuesto()} USD.`);
