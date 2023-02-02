import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDesireComponent } from './navbar-desire/navbar-desire.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { VistoComponent } from './visto/visto.component';

import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NavbarDesireComponent, BarraBusquedaComponent, CategoriaComponent, VistoComponent],
  imports: [
    CommonModule, IonicModule
  ], exports: [NavbarDesireComponent, IonicModule, BarraBusquedaComponent, CategoriaComponent, VistoComponent]
})
export class ComponentsModule { }
