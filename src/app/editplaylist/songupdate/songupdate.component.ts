import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SonglistService } from 'src/app/songlist.service';

@Component({
  selector: 'app-songupdate',
  templateUrl: './songupdate.component.html',
  styleUrls: ['./songupdate.component.css']
})
export class SongupdateComponent implements OnInit{

  myReactiveForm:FormGroup;
  playlistid:number;
  songlist:object ={};
  name:string;
  singer:string;
  movie:string;
  genre:string;
  length:string;
  id:number;

  constructor( private activatedRoute:ActivatedRoute, private mysongservice: SonglistService, private router:Router) {
    this.activatedRoute.params.subscribe(p=>{this.playlistid=p.id});  

    

    this.mysongservice.getdataservice("http://localhost:3000/songlist").subscribe(  //used to get songlist
      data =>{this.songlist = data //,
        console.log(this.songlist);
        for(var a=0;a<=Object.keys(this.songlist)?.length;a++){
          if(this.songlist[a]?.id==(this.playlistid))
          this.id=a;
        }
      this.name=this.songlist[this.id].Name;
      this.singer=this.songlist[this.id].Singer;
      this.movie=this.songlist[this.id].movie;
      this.genre=this.songlist[this.id].genere;
      this.length=this.songlist[this.id].Length;
      }
    )
   }
   
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'name': new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'singer': new FormControl(null ,[Validators.required,Validators.minLength(3)]),
      'movie' : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'genre': new FormControl(null ,[Validators.required,Validators.minLength(3)]),
      'length': new FormControl(null ,[Validators.required])
    });
  
  }

  updatesong(){ //edit song
    console.log(this.songlist);
    this.mysongservice.editsongdetails(this.songlist[this.id].Playlist, this.name,this.songlist[this.id].SongUrl,this.songlist[this.id].ImgUrl,this.singer,this.length,this.movie,this.genre,this.playlistid).subscribe();
    this.router.navigate(["editplaylist/songlist"]);
  }
}
