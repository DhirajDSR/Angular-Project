import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SonglistService } from '../songlist.service';

@Component({
  selector: 'app-songdetail',
  templateUrl: './songdetail.component.html',
  styleUrls: ['./songdetail.component.css']
})
export class SongdetailComponent implements OnInit {

  myReactiveForm:FormGroup;
  songalbum:string='';

  constructor(private routes:Router, private songservice:SonglistService) {
    
   }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'sname': new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'surl': new FormControl(null ,[Validators.required,Validators.minLength(10)]),
      'iurl': new FormControl(null ,[Validators.required,Validators.minLength(10)]),
      'singer': new FormControl(null ,[Validators.required,Validators.minLength(3)]),
      'movie' : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'genre': new FormControl(null ,[Validators.required,Validators.minLength(3)]),
      'length': new FormControl(null ,[Validators.required]) 
    });
    
  }

  url='http://localhost:3000/songlist/'

  addsong(){   // add new song
    this.songservice.addsongservice(this.myReactiveForm.value.sname, this.myReactiveForm.value.surl,this.myReactiveForm.value.iurl,this.url,this.myReactiveForm.value.singer,this.myReactiveForm.value.length,this.myReactiveForm.value.movie,this.myReactiveForm.value.genre).subscribe(
      result=>{alert("Sucessfully added song"), this.routes.navigate(['editplaylist/songlist'])}
    )
  }

  goback(){
    this.routes.navigate(['editplaylist/songlist']);  // used to navigate
  } 

}
