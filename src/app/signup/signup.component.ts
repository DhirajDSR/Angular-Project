import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SonglistService } from '../songlist.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myReactiveForm:FormGroup;
  userdetail:object=[];
  userregistered:boolean=false;
 
  constructor(private mysongservice: SonglistService ,private routes:Router) { }
  
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'fname': new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'lname': new FormControl(null ,[Validators.required,Validators.minLength(3)]),
      'location': new FormControl(null ,[Validators.required,Validators.minLength(4)]),
      'mobileno': new FormControl(null ,[Validators.required,Validators.min(1111111111)]),
      'emailid' : new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null ,[Validators.required,Validators.minLength(8)]),
      'cpassword': new FormControl(null ,[Validators.required])
    },{
      validators:this.passwordCheck.bind(this)
    })

    this.mysongservice.getdataservice(this.mysongservice.userdetailurl).subscribe( //used to get user detail inorder to validate that email is used or not previously
      data =>{this.userdetail = data //,
      //console.log(this.userdetail)
      })

  }

  passwordCheck(formGroup: FormGroup) {  // used to check whether password and confirm password are equal or not
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('cpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  adduser(){       // add new user details
    for(var i=0; i<Object.keys(this.userdetail).length; i++){
      if(this.myReactiveForm.value.emailid==this.userdetail[i].Email ){
        this.userregistered=true;
        alert("Already registered with same email")
      }
    }
    if(this.userregistered==false){
    this.mysongservice.adduserservice(this.myReactiveForm.value.fname, this.myReactiveForm.value.lname,this.myReactiveForm.value.emailid,this.myReactiveForm.value.location,this.myReactiveForm.value.mobileno,this.myReactiveForm.value.password).subscribe(
      result=>{alert("Sucessfully registered"),this.myReactiveForm.reset(),this.routes.navigate(["login"])}
    )
    }
    this.userregistered=false;
  }

  login(){
    this.routes.navigate(["login"])   // used  to navigate
  }

}
