import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ExtraOptions} from '@angular/router';
import { AutosComponent } from './tipos/autos/autos.component';
import { CamionesComponent } from './tipos/camiones/camiones.component';
import { MotosComponent } from './tipos/motos/motos.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AutoPublishComponent } from './auto-publish/auto-publish.component';
import { PatioComponent } from './patio/patio.component';
import { RegisterComponent } from './auth/register/register.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',

  // ...any other options you'd like to use
};

const routes: Routes = [
  {path: 'autos',component: AutosComponent},
  {path: 'motos', component: MotosComponent},
  {path: 'camiones',component: CamionesComponent},
  {path: 'login',component:LoginComponent},
  {path: '',redirectTo:'/autos', pathMatch:'full'},
  {path: 'register',component:RegisterComponent},
  {path: 'users', component:UserComponent},
  {path:'ap',component:AutoPublishComponent},
  {path:'patio',component:PatioComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
