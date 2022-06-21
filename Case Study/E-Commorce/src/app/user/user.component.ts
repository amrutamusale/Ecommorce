import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  templateUrl: './user.component.html'
})
export class userComponent {

  constructor(public httpc:HttpClient) {
   

  }
  title = 'E-COMMORCE';
  myname = 'Amruta Musale'
  UserModel: User = new User();
 UserModels: Array<User> = new Array<User>();
  Adduser() {
    console.log(this.UserModel);
    //this.CustmerModels.push(this.userModel);

    var userdto={
      userCode:this.UserModel.UserId,
      userName:this.UserModel.UserName,
    }
    this.httpc.post("https://localhost:44381/api/user",userdto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.UserModel = new User();
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  Edituser(input: User) {
    this.UserModel = input;
  }
  Deleteuser(input: User) {
    var index=this.UserModels.indexOf(input);
    this.UserModels.splice(index,1);
  }
  getData(){
    console.log("Hi");
    this.httpc.get("https://localhost:44381/api/user").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  GetSuccess(input:any){
    this.UserModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
}