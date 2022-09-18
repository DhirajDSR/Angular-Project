import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';

const eRoutes:Routes=[
  {
    path:'',
    component: PlaylistComponent,
    canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    PlaylistComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(eRoutes),
    
  ]
})
export class PlaylistModule { }
