import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.components";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "This load dianamically";
  imgUrl: string = 'https://www.humaneworld.org/sites/default/files/styles/sa_social_media_facebook/public/2022-09/wild-rabbit-166068.jpg?h=20b84feb&itok=AySMKYcT';
  isDisabled: boolean = true;
  isActive : boolean = true;
  fruitName : string = "Apple";

  buttonClick() {
    console.log("button Clickeed");
  }
  enter(){
    console.log("enter pressed");
  }

}
