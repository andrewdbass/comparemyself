import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Output() age = new EventEmitter();
  private ageInput:number;
  constructor() { }
  private newAge(){
    if(this.ageInput>0){
      console.log(this.ageInput)
      this.age.emit(this.ageInput);
    }
  }
  ngOnInit() {
  }

}
