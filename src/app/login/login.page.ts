import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
//import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  //imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  imports: [IonicModule, FormsModule],
})
export class LoginPage implements OnInit {

  usuario: String = "";
  contrasena: String= "";

  obj = [
    {
    usuario : "jimmy",
    contrasena : "123",
    type: "user"
  }
]

  constructor(public router: Router) { }

  ngOnInit() {
  }
  inicio(){
   this.obj.map(data=>{   
    const {usuario, contrasena, type} = data;
    if(this.usuario === usuario && this.contrasena === contrasena){
      (type === "user") ? this.router.navigate(['/home']) : this.router.navigate(['/admin'])

    }else{
      alert("no se logueo")
    }
  })
  }
}
