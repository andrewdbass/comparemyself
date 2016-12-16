import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() age: any;
  @Input() person: any;
  @Output() navigateBackAction = new EventEmitter()

  constructor() { }
  private navigateBack(){
      this.navigateBackAction.emit(true)
  }
  ngOnInit() {

  }

}
