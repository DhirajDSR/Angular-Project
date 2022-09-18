import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SonglistService } from '../songlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  myReactiveForm:FormGroup;
  userdetail:object=[];
  url:string="http://localhost:3000/userdetails";
  username:string='';
  uservalidationstatus:boolean=false;
  
  constructor(private routes:Router, private loginservice:SonglistService){}
  
  signup(){
    this.routes.navigate(['signup'])
  }

  onSubmit(){    // login 
    //window.console.log(this.myReactiveForm);
    for(var i=0; i<Object.keys(this.userdetail).length; i++){
      if((this,this.myReactiveForm.value.email==this.userdetail[i].Email) && (this,this.myReactiveForm.value.password==this.userdetail[i].Password) ){
        this.username=this.userdetail[i].FirstName+" "+this.userdetail[i].LastName;
        this.uservalidationstatus=true;
        sessionStorage.setItem("loginstatustrue",this.username);
        sessionStorage.setItem("profile",JSON.stringify([this.username,this.userdetail[i].Location,this.userdetail[i].Email,this.userdetail[i].MobileNo]));
        this.routes.navigate(["WiproMusic"]);
      }  
    }
    if(!this.uservalidationstatus){
      alert("Please enter vaid details")
    }
  }
  

  ngOnDestroy(){   
    window.location.reload(); //used to refresh the page so that we get session storage data for login
  }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null ,[Validators.required,Validators.minLength(8)]),
    })

    this.loginservice.getdataservice(this.url).subscribe(    //used to get userlist details
      data =>{this.userdetail = data//,
      //console.log(this.userdetail)
      })
  }
}
