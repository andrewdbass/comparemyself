import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ListComponent } from './list/list.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAIZ4JWGeG5SBvydPQZ-XkP2BCWLmG5usw',
  authDomain: 'comparemyself-ef3d1.firebaseapp.com',
  databaseURL: 'https://comparemyself-ef3d1.firebaseio.com',
  storageBucket: 'comparemyself-ef3d1.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
