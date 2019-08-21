import { Component, OnInit } from '@angular/core';
import { EmpleadoServicio } from '../../servicios/empleado.servico';
import { format } from 'util';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/modelo/empleado';
import { Subscriber, from } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [EmpleadoServicio]
})
export class EmpleadoComponent implements OnInit {

  constructor(public  empleadoServicio: EmpleadoServicio ) { }

  ngOnInit() {
    this.getEmpleados();
  }

  addEmpleado(form: NgForm) {
    if (form.value._id) {
      this.empleadoServicio.putEmpleado(form.value)
      .subscribe(res => {
       this.resetForm(form);
       M.toast({html: 'empleado modificado'});
       this.getEmpleados();
      });
    } else {
      this.empleadoServicio.postEmpleado(form.value)
      // tslint:disable-next-line: align
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'El empleado fue registrado', classes: 'rounded'});
        this.getEmpleados();
      });
    }
  }
  getEmpleados() {
    this.empleadoServicio.getEmpleados()
    .subscribe(res => {
      // metodo para listar los empleados
      this.empleadoServicio.empleados = res as Empleado[];
      console.log(res);
    });

  }
  editarEmpleado(empleado: Empleado) {
    // metodo para poder modificar por usuario
     this.empleadoServicio.selectedEmpleado = empleado;
  }

  // tslint:disable-next-line: variable-name
  eliminarEmpleado(_id: string) {
    this.empleadoServicio.deleteEmpleado(_id)
    .subscribe(res => {
      this.getEmpleados();
    });


  }

  // tslint:disable-next-line: no-shadowed-variable
  resetForm({ form, NgForm }) {
    if (form) {
      form.reset();
      this.empleadoServicio.selectedEmpleado = new Empleado();
    }
  }

}
