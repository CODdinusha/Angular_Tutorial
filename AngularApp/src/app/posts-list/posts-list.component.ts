import { Component, Input, EventEmitter,Output} from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-posts-list',
  imports: [CardComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  // @Input() postListTitle : string = "";
  // @Input() postIsLogin : boolean = false;

  ChildMessage : string = 'Hello Message from child class';
  postCount : number = 1;

  parentMessage: string = "massage from child using click event ";

  @Output() MessageEvent = new EventEmitter();

  sendMessage() {
    console.log('clicked');
    this.MessageEvent.emit(this.parentMessage);
  }
}

