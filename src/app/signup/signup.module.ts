import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';

const sRoutes:Routes=[
  {
    path:'',
    component:SignupComponent,
    canDeactivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(sRoutes)
  ]
})
export class SignupModule { 
  constructor(){
    console.log("signup module loaded");
  }
}
