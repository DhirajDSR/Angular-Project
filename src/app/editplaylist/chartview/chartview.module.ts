import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartviewComponent } from './chartview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from 'src/app/authguard.guard';
import { ChartsModule } from 'ng2-charts';



const eRoutes:Routes=[
  {
    path:'',
    component: ChartviewComponent,
    canActivate:[AuthguardGuard]
  }
]

@NgModule({
  declarations: [
    ChartviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(eRoutes),
    ChartsModule
    
  ]
})
export class ChartviewModule { }
