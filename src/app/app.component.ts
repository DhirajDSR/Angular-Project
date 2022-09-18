import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SonglistService } from './songlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'songsplaylist';
  songsearch:string='';
  loginstatustrue:String='';
  @ViewChild('reset') searchreset:ElementRef;
  
  constructor(private headerservice:SonglistService, private routes:Router){
    this.loginstatustrue=sessionStorage.getItem("loginstatustrue"); //get loginstatus from session storage
  }

  search(){
    this.headerservice.songsearch.next(this.songsearch); // used to pass search string to home component
    this.searchreset.nativeElement.value=''; // used to reset the value of search box
  }

  filter(song){  
    this.headerservice.songsearch.next(this.songsearch); // used to pass search string to home component
  }

  logout(){
    // this.headerservice.loginstatustrue.next('');
    sessionStorage.clear();      // used to clearsession data 
    this.loginstatustrue='';      // set loginstatus
    this.routes.navigate(["login"]);   // navigate
  }
  
}
