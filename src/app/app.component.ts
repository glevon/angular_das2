import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public inp:{username:string,password:string} ={
    username:"",
    password:"",
  }
  public error:string=""
  public username:string="g"
  public password:string="g"
  public logged:boolean=false
  
  login(): void{
    this.error=""
    if (this.inp.username=="" || this.inp.password=="") {
      this.error="Please fill the fields"
    }
    else if (this.inp.username!=this.username || this.inp.password!=this.password) {
      this.error="Wrong username or password"
    }
    else{
      this.logged=true                      
    }
  }
}
