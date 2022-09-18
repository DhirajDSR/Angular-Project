import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SonglistService } from 'src/app/songlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private mysongservice: SonglistService, private router:Router) {
    this.playlist =JSON.parse(sessionStorage.getItem("playlist")); //used to get playlist from session storage
    console.log(this.playlist);
    // this.mysongservice.songsearch.subscribe(
    //   res=>{
    //     this.songsearch=res;
    //   })
    console.log("playlist child component loaded")
   }
   
  songlist:object ={};
  psonglist:object={};
  songsearch:string='';
  playlist:string[];
  url='http://localhost:3000/songlist';
 

  ngOnInit(): void {
    this.mysongservice.getdataservice(this.url).subscribe(
      data =>{this.songlist = data //,                used to get songlist
      //console.log(this.songlist);
      }
    )
  }
 
  delete(playlistdetail:any,playlistName:string){   //used to delete song from playlist
    console.log(playlistName)
    //console.log(playlistdetail.value.Playlist)
    this.mysongservice.playlistArray.next(playlistdetail.value.Playlist) 
    this.mysongservice.playlistName.next(playlistName);
    this.mysongservice.editplaylistservice(playlistdetail.value).subscribe(
      //result=>{alert("Successfully deleted from "+playlistName +" playlist")}
    )
  }

  submit(){
    this.router.navigate(["editplaylist/new"]);
  }

  deleteplaylist(p:string){          // used to delete playlist
    this.playlist=this.playlist.filter(item=>item!=p);
    sessionStorage.setItem("playlist",JSON.stringify(this.playlist));
    for(var a=0;a<=Object.keys(this.songlist).length;a++){
      if(this.songlist[a]?.Playlist.includes(p)){
        this.mysongservice.playlistArray.next(this.songlist[a].Playlist); 
        this.mysongservice.playlistName.next(p);
        this.mysongservice.editplaylistservice(this.songlist[a]).subscribe();
      }
    } 
  }

  addsong(album:string){                 //add song
    console.log(album)
    this.router.navigate(['editplaylist/update/'+album]);
  }

}
