import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SonglistService } from 'src/app/songlist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id1:number;
  id:number;
  songlist:object ={};
  constructor( private activatedRoute:ActivatedRoute, private mysongservice: SonglistService) {
    this.activatedRoute.params.subscribe(p=>{this.id1=p.id});
    this.mysongservice.getdataservice("http://localhost:3000/songlist").subscribe(  //used to get songlist
    data =>{this.songlist = data //,
    //console.log(this.songlist);
    for(var a=0;a<=Object.keys(this.songlist)?.length;a++){
      if(this.songlist[a]?.id==(this.id1))
      this.id=a;
    }
    }
  )
   }

  ngOnInit(): void {
   
  }

}
