import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:String[] = JSON.parse(sessionStorage.getItem("profile")); //used to userdetail from session storage

  constructor() {
    
    console.log(this.profile)
   }

  ngOnInit(): void {
  }

}
