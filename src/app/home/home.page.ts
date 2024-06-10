import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage implements OnInit {
  //ver: String = "0";
  num: String = "";

  constructor() {}

  ngOnInit() {
  }

  numeros(){
    //this.ver= "num" + this.num;
  }
  
}
