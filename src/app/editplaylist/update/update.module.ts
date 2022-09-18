import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';



const eRoutes:Routes=[
  {
    path:'',
    component: UpdateComponent,
    canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(eRoutes),
    
  ]
})
export class UpdateModule { }
