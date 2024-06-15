import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonCard } from '@ionic/angular/standalone';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage implements OnInit {
  personajes:any[] = [];
  id:BigInteger[] = []
  constructor(public servicio: DatosService) {}

  ngOnInit() {
    
    this.servicio.getNarutoApi().subscribe((data:any)=>{
      this.personajes = data.characters;
      this.personajes.map(datos=>{
       this.id= datos.id
      })
      //console.log(data.characters);
    }) 
  }

  modificaPersonaje(){
    this.servicio.modifNarutoApi(this.id).subscribe((data:any)=>{
    this.personajes= data.characters;
    this.personajes.map(datos=>{
      this.id =datos.id
      })
    })
  }

  eliminaPersonaje(){
    this.servicio.eliminaPersonaje().subscribe((data:any)=>{
      this.personajes= data.characters;
      this.personajes.map(datos=>{
      this.id =datos.id
      })
    })
  }

}
