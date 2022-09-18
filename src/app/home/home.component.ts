import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SonglistService} from '../songlist.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  songlist:object ={};
  songurl=new Audio();
  songsearch:string='';
  playlist:String[]=["Bollywood","Punjabi","Trending","Latest","Sad"];
  url='http://localhost:3000/songlist';

  //status:boolean=false;

  constructor(private mysongservice: SonglistService, private router:Router) {
    console.log("home component loaded");
    if(JSON.parse(sessionStorage.getItem("playlist"))){ 
      this.playlist=JSON.parse(sessionStorage.getItem("playlist"));
    }
    
    sessionStorage.setItem("playlist",JSON.stringify(this.playlist));  // used to store playlist in session
    this.mysongservice.songsearch.subscribe(  //used to get search string from app component
      res=>{
        this.songsearch=res;
      }
    )
   }

  play(songname, songurl){      // used to play song
    this.router.navigate(['WiproMusic',{songname}]);
    this.songurl.src=songurl;
    this.songurl.play();  
  }

  pause(){           // used to pause song
    this.songurl.pause();
    
  }

  ngOnInit(): void {
    this.mysongservice.getdataservice(this.url).subscribe(  //used to get songlist
      data =>{this.songlist = data //,
      //console.log(this.songlist);
      }
    )
  }

  ngOnDestroy(){
    this.mysongservice.songsearch.next(''); 
    this.songurl.pause();   //pause playing song while navigate to other site
  }

  // collapse(){
  //   if(this.status===false){
  //     this.status= true;
  //   }
  //   else
  //   this.status=false;
  // }

}
