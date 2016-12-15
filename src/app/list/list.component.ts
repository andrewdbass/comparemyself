import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private people: FirebaseListObservable<any[]>;
  constructor(
    af: AngularFire
  ) {
    this.people = af.database.list('/people');
  }

  ngOnInit() {
    // this.people.push(
    //   {
    //     name:"Elon Musk",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/220px-Elon_Musk_2015.jpg"
    //   }
    // );
    // this.people.push(
    //   {
    //     name:"Steve Jobs",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/220px-Steve_Jobs_Headshot_2010-CROP.jpg"
    //   }
    // );
    // this.people.push(
    //   {
    //     name:"Mark Zuckerberg",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Mark_Zuckerberg_em_setembro_de_2014.jpg/220px-Mark_Zuckerberg_em_setembro_de_2014.jpg"
    //   }
    // );
    console.log(this.people);
  }

}
