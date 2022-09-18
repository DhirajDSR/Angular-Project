import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongdetailComponent } from './songdetail.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { ReactiveFormsModule } from '@angular/forms';

const sRoutes:Routes=[
  {
    path:'',
    component:SongdetailComponent,
    canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    SongdetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(sRoutes)
  ]
})
export class SongdetailModule {
  constructor(){
    console.log("songdetails module loaded");
  }
 }
