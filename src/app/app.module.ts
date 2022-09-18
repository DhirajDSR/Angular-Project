import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SonglistService } from './songlist.service';
import {HttpClientModule} from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FilterPipe } from './pipe/filter.pipe';
import { EditplaylistComponent } from './editplaylist/editplaylist.component';
import { ChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { SongsComponent } from './editplaylist/songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongsComponent,
    EditplaylistComponent,
    PagenotfoundComponent,
    FilterPipe,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [SonglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
