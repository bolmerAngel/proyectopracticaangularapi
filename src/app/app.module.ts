import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { format } from 'util';
import { from } from 'rxjs';
import {cors} from 'cors';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
