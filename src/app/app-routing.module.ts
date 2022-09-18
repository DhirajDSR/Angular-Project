import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { EditplaylistComponent } from './editplaylist/editplaylist.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'WiproMusic',
    pathMatch:'full'
  },
  {
    path:'WiproMusic',
    component:HomeComponent
  },
  {
    path:'signup',
    //loadChildren:'./signup/signup.module#SignupModule'
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'editplaylist',
    component:EditplaylistComponent,
    children:[
      {
        path:'playlist',
        //component:PlaylistComponent
        loadChildren: () => import('./editplaylist/playlist/playlist.module').then(m => m.PlaylistModule)
      },
      {
        path:'songlist',
        loadChildren: () => import('./editplaylist/songs/songs.module').then(m => m.SongsModule)
      },
      {
        path:'update/:name',
        loadChildren: () => import('./editplaylist/update/update.module').then(m => m.UpdateModule)
      },
      {
        path:'songupdate/:id',
        loadChildren: () => import('./editplaylist/songupdate/songupdate.module').then(m => m.SongupdateModule)
      },
      {
        path:'new',
        loadChildren: () => import('./editplaylist/new/new.module').then(m => m.NewModule)
      },
      {
        path:'songdetails/:id',
        loadChildren: () => import('./editplaylist/details/details.module').then(m => m.DetailsModule)
      },
      {
        path:'chartview',
        loadChildren: () => import('./editplaylist/chartview/chartview.module').then(m => m.ChartviewModule)
      }
    ]
  },
  {
    path:'addSong',
    loadChildren: () => import('./songdetail/songdetail.module').then(m => m.SongdetailModule)
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
