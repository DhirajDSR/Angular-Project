import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private routes:Router) { }

  home(){
    this.routes.navigate(['WiproMusic']);   // used to navigate to wipromusic
  }

  ngOnInit(): void {
  }

}
