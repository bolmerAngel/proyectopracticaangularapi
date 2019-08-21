import { Component } from '@angular/core';
import { Empleado } from './modelo/empleado';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    console.log(environment.production); // Logs false for default environment
  }


    title = 'frontEmpleado';
    Empleado;
/*
    fetchDataFromServer() {
      this.Empleado = get('/api/empleado')
      .map((res: { json: () => void; }) => {
        return res.json();
      });
    }*/


  }

