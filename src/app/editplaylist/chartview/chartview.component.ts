import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { SonglistService } from 'src/app/songlist.service';

@Component({
  selector: 'app-chartview',
  templateUrl: './chartview.component.html',
  styleUrls: ['./chartview.component.css']
})
export class ChartviewComponent implements OnInit {


  songlist:object ={};
  noOfSong:number[]=[];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  //public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels: Label[] = JSON.parse(sessionStorage.getItem("playlist"));
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 95], label: 'No Of Song' }
   //{data: this.noOfSong}
  ];

  constructor(private mysongservice: SonglistService) { 
    this.mysongservice.getdataservice('http://localhost:3000/songlist').subscribe(  //used to get songlist
      data =>{this.songlist = data //,
      //console.log(this.songlist);
      console.log((JSON.parse(sessionStorage.getItem("playlist"))).length);
      var playlist:string[] = JSON.parse(sessionStorage.getItem("playlist"));
      var noOfPlaylist=(JSON.parse(sessionStorage.getItem("playlist"))).length;
      for(var i=0; i<noOfPlaylist;i++){
        var n:number=0;
        for(var a=0;a<=Object.keys(this.songlist).length;a++){
        if(this.songlist[a]?.Playlist.includes(playlist[i])){
          n++; 
        }
        }
        this.noOfSong.push(n);
      }
      console.log(this.noOfSong)
      }
    )

    this.barChartData[0].data=this.noOfSong;
  }

  ngOnInit(): void {

    

  }

}
