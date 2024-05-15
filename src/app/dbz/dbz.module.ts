import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations:[
        MainPageComponent,
        ListaComponent,
        FormularioComponent
    ],
    imports: [CommonModule,FormsModule],
    exports: [MainPageComponent],

})
export class DbzModule { }
