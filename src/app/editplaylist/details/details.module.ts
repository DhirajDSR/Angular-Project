import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';

const eRoutes:Routes=[
  {
    path:'',
    component: DetailsComponent,
    canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(eRoutes),
    
  ]
})
export class DetailsModule { }
