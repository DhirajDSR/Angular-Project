import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SonglistService } from 'src/app/songlist.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  playlistname:String='';
  songlist:object ={};

  constructor( private activatedRoute:ActivatedRoute, private mysongservice: SonglistService, private router:Router) {
    this.activatedRoute.params.subscribe(p=>{this.playlistname=p.name});  
    console.log(this.playlistname);

    this.mysongservice.getdataservice("http://localhost:3000/songlist").subscribe(  //used to get songlist
      data =>{this.songlist = data //,
      console.log(this.songlist);
      }
    )
   }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(["editplaylist/playlist"])
  }

  add(playlistdetail:any,playlistName:string){   //used to add song to playlist
    this.mysongservice.playlistArray.next(playlistdetail.value.Playlist)
    this.mysongservice.playlistName.next(playlistName);
    this.mysongservice.addsongplaylistservice(playlistdetail.value).subscribe(
      //result=>{alert("Successfully added to "+playlistName +" playlist")}
    )
  }

  delete(playlistdetail:any,playlistName:string){   //used to delete song from playlist
    this.mysongservice.playlistArray.next(playlistdetail.value.Playlist)
    this.mysongservice.playlistName.next(playlistName);
    this.mysongservice.editplaylistservice(playlistdetail.value).subscribe(
      result=>{alert("Successfully deleted from "+playlistName +" playlist")}
    )
  }

  // details(id:number){
  //   this.router.navigate(["editplaylist/songdetails/"+id])
  // }

}
