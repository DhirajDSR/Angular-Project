import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongupdateComponent } from './songupdate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';



const eRoutes:Routes=[
  {
    path:'',
    component: SongupdateComponent,
    canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    SongupdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(eRoutes),
    
  ]
})
export class SongupdateModule { }
