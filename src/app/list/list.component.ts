import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions,Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private people = [];
  @Output() selectedPerson = new EventEmitter();
  constructor(
    private http: Http,
  ) {

  }
  slectPerson(person){
    this.selectedPerson.emit(person);
    console.log(person)
  }
  ngOnInit() {
  this.http.get("../../assets/data.json")
    .map(response => response.json())
    .subscribe( (res) => {
      console.log(res)
      this.people = res;
    });
  }

}
