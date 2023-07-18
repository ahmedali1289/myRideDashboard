import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
@NgModule({
  declarations: [
    DefaultComponent,
     EcommerceComponent ,
    ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
