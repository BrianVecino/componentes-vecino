import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
           edad: number;
           constructor(){
            this.edad =18;
           }

           ngOninit (): void{
                console.log ('componente cargado')
           }

           aumentarEdad(){
            this.edad++
           }
           disminuirEdad(){
            this.edad--
           }
}
