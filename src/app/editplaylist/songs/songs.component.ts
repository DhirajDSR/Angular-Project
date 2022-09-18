import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SonglistService } from 'src/app/songlist.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songlist:object ={};
  display:String[]=["Movie","Singer","Genre","Length"];
  movie:boolean=false;
  singer:boolean=false;
  genre:boolean=false;
  length:boolean=false;
  songsearch:string='';

  constructor(private mysongservice: SonglistService, private router:Router) { 
    this.mysongservice.songsearch.subscribe(  //used to get search string from app component
      res=>{
        this.songsearch=res;
      }
    )
  }

  ngOnInit(): void {
    this.mysongservice.getdataservice('http://localhost:3000/songlist').subscribe(  //used to get songlist
      data =>{this.songlist = data //,
      //console.log(this.songlist);
      }
    )
  }

  editsong(id:number){ //edit song
    this.router.navigate(["editplaylist/songupdate/"+id])
  }

  addsong(){ 
    this.router.navigate(["addSong"])
  }

  deletesong(id:number){ //delete song
    this.mysongservice.deletesongservice(id,"http://localhost:3000/songlist/").subscribe(
      //result=>{alert("Successfully deleted")}
    )
  }

  checkBoxvalue(e,toDisplay){ //used for customize view
    if(e.target.checked){
      if(toDisplay==="Movie"){
        this.movie=true;
      }
      else if(toDisplay==="Singer"){
        this.singer=true;
      }
      else if(toDisplay==="Genre"){
        this.genre=true;
      }
      else{
        this.length=true;
      } 
    }

    else{
      if(toDisplay==="Movie"){
        this.movie=false;
      }
      else if(toDisplay==="Singer"){
        this.singer=false;
      }
      else if(toDisplay==="Genre"){
        this.genre=false;
      }
      else{
        this.length=false;
      }
    }
  }

}
