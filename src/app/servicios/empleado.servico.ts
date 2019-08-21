import {  Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Empleado } from '../modelo/empleado';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn : 'root'
})
export class EmpleadoServicio {

    selectedEmpleado: Empleado;
    empleados: Empleado[];
    readonly URL_API = environment.URL_API;


    constructor(private http: HttpClient) {
        this.selectedEmpleado = new Empleado();
     }


    getEmpleados() {
        return this.http.get(this.URL_API);
    }

    // tslint:disable-next-line: no-shadowed-variable
    postEmpleado(Empleado: Empleado) {
        console.log(Empleado);
        return this.http.post(this.URL_API, Empleado);
    }

    putEmpleado(empleado: Empleado) {
        return this.http.put(this.URL_API +  `/${empleado._id}`, empleado);

    }

    deleteEmpleado(id: string) {
        return this.http.delete(this.URL_API + `/${id}`);

    }

}

