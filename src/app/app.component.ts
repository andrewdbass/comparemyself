import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private age = 0;
  private person = {}
  private showList = true;
  private newAge(event){
    console.log(event)
    this.age = event
  }
  private backToList(event){
    this.showList = true;
  }
  private selectPerson(event){
    if(this.age>0){
      this.person =  event;
      this.showList = false;
    }
  }
}
