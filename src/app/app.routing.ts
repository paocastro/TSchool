import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './General/Login/Login.component';
import { EncabezadoComponent } from './General/Encabezado/Encabezado.component';
import { Tablero1Component } from './TablerosControl/Tablero1/Tablero1.component';
import { addEstudianteComponent } from './School/Matriculas/addEstudiante.component';


const appRutas: Routes = [
    { path: "Login", component: Login },
    
    {path: "ADM",
        component: EncabezadoComponent, children: [
            { path: "Tablero1", component: Tablero1Component },
            { path: "addEstudiante", component: addEstudianteComponent },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRutas,
            { useHash: true }
        )

    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {
    

}

