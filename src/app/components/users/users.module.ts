import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { RequestsComponent } from './requests/requests.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CountToModule } from 'angular-count-to';
import { ImageModule } from 'src/app/image/image.module';
@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    FormsModule,
    UsersRoutingModule,
    NgxPaginationModule,
    CountToModule,
    ImageModule
  ]
})
export class UsersModule { }
