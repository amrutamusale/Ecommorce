import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from '../routing/routing.admin';
import { AdminComponent } from './admin.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(AdminRoutes)
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }