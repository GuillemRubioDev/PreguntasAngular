import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
{path:'', component:InicioComponent}, //Redireccion al inicio
{path:'usuario', loadChildren: () => import('./components/usuario/usuario.module')
                .then(m => m.UsuarioModule)},
{path:'**',redirectTo:'/',pathMatch:'full'} //Hacemos que compare todas las rutas y si no existe va al inicio, asi no nos sale el error de pagina no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
