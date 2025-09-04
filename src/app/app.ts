import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
// import { Test } from './components/test/test';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('interview-helper');

//   messageFromParent: string = 'Я твій батько';
//   messageFromChild: string = '';
// newTask: any;

//   getMessageFromChild(message: string) {
//     this.messageFromChild = message;
//   }
  
}
