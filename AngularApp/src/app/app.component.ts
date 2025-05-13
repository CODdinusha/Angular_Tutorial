import { Component,ViewChild,AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from "./navbar/navbar.components";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, HeaderComponent,FormsModule,PostsListComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title: string = "This load dianamically";
  imgUrl: string = 'https://www.humaneworld.org/sites/default/files/styles/sa_social_media_facebook/public/2022-09/wild-rabbit-166068.jpg?h=20b84feb&itok=AySMKYcT';
  isDisabled: boolean = true;
  isActive : boolean = true;
  fruitName : string = "Apple";
  userName: string = "John Doe";

  // buttonClick() {
  //   console.log("button Clickeed");
  // }
  // keyEnter(event:any) {
  //   if(event.keycode == 13) {
  //     console.log('Enter key Pressed');
  //   }
  // }
  // keyupFiltering(){
  //   console.log("keyup filtering")
  // }    

      // keyupFiltering(user:HTMLInputElement) {
      //     console.log(user.value)
      // }

      // updateUserName(userName:HTMLInputElement) {
      //   this.userName= userName.value;
      //   console.log(this.userName);
      // }
      appPostTitle : string = 'post 1';
      appIsLogin : boolean = false;

    @ViewChild(PostsListComponent) childMessage: any;
    message : string = '';
    messageFromChild : string ='';

    // constructor() {
    //   console.log(this.childMessage);
    // }
    constructor(private cdRef: ChangeDetectorRef) {}

    ngAfterViewInit() {
      console.log(this.childMessage);
      
         this.message = this.childMessage.postCount;
      this.cdRef.detectChanges();
      };
    receiveMessage(message:string) {
      console.log(message);
      this.messageFromChild = message;
    }
     
    }



