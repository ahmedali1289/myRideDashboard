import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SampleComponent } from '../others/sample/sample.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'login',
        component:LoginComponent
      },
      {
        path: 'default',
        component: DefaultComponent
      },
      {
        path:'ecommerce',
        component:EcommerceComponent
      },
      {
        path:'sample',
        component:SampleComponent
      },
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
