import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserRoutes } from '../routing/routing.user';

@NgModule({
  declarations: [
    userComponent
 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  providers: [],
  bootstrap: [userComponent]
})
export class UserModule { }
