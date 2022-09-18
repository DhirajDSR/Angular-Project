import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  myReactiveForm:FormGroup;
  playlist:string[];

  constructor(private router:Router) {
    this.playlist=JSON.parse(sessionStorage.getItem("playlist")); //used to get playlist 
    console.log(this.playlist)
   }

  onSubmit(){ //create new playlist if it's not already present with same name
    if(this.playlist.includes(this.myReactiveForm.value.playlist)){
      alert("Same Playlist Name already exist")
    }
    else{
      this.playlist.push(this.myReactiveForm.value.playlist);
      console.log(this.playlist)
      sessionStorage.setItem("playlist",JSON.stringify(this.playlist))
      this.router.navigate(["editplaylist/update/"+this.myReactiveForm.value.playlist])
    }
    
  }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'playlist': new FormControl(null,[Validators.required,Validators.minLength(3)]),
    })
  }

}
