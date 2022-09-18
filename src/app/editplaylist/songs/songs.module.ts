import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';
import { FilterPipe } from 'src/app/pipe/filter.pipe';



const eRoutes:Routes=[
  {
    path:'',
    component: SongsComponent,
    canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(eRoutes),

  ]
})
export class SongsModule { }
