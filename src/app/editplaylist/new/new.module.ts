import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';



const eRoutes:Routes=[
  {
    path:'',
    component: NewComponent,
    canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    NewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(eRoutes),
    
  ]
})
export class NewModule { }
