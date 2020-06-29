import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css','../app.component.css']
})
export class AdminComponent implements OnInit {
  public users: object[]=[
    {name:"Ani",surename:"Manukyan",email:"а@mail.com",age:25,show:false,inp:""},
    {name:"Ashot",surename:"Karapetyan",email:"аsh@mail.com",age:28,show:false,inp:""},
    {name:"Karen",surename:"Hwvakimyan",email:"k@mail.com",age:22,show:false,inp:""},
  ]
  user={name:"",surename:"",email:"",age:"",show:false,inp:""}
  error=""
  add(){
    if (this.user.name!="" && this.user.surename!="" && this.user.email!="" && this.user.age!="") {
      this.users.push(this.user)
      this.user={name:"",surename:"",email:"",age:"",show:false,inp:""}
      this.error=""
    }
    else{
      this.error="please fill all fields"
    }

  }
  delete(u){
    this.users=this.users.filter(a=>a!=u)
  }
  block(u){
    u.show=true
  }
  save(u){
    u.show=false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
