export class Empleado {
  value: any;
   // tslint:disable-next-line: max-line-length
   // tslint:disable-next-line: variable-name
   constructor( _id= '', nombre = '', apellido= '', identificacion = '', cargo = '', salario = 0 ) {
     this._id = _id;
     this.nombre = nombre;
     this.apellido = apellido;
     this.identificacion = identificacion;
     this.cargo = cargo;
     this.salario = salario;


   }
    // tslint:disable-next-line: variable-name
    _id: string;
    nombre: string;
    apellido: string;
    identificacion: string;
    cargo: string;
    salario: number;

}
