import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import{  CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule, HighlightDirective, TruncatePipe],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

  newTask: string = '';
  tasks: string[] = [];


  // constructor(private todoService: TodoService) { }  1 варіант акттивації сервісу 

  constructor() { } // 2 варіант активації сервісу

  private todoService =inject(TodoService);
  
  ngOnInit() {
    this.tasks = this.todoService.getTasks();
  }
  addTask() {
    if (this.newTask.trim() !== '') {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
      this.updateTasks();
    }
  }

  removeTask(index: number) {
    this.todoService.removeTask(index);
    this.updateTasks();
  }

  private updateTasks() { 
    this.tasks = this.todoService.getTasks();
  }

  title = 'This is interpolation';
  firstName = 'Mary';
  lastName = 'Smith';

  isEnabled: boolean = false; // example of handle btn"clickme"

  isActive: boolean = true;
  isDisabled: boolean = false;

  isClickedState: boolean = false; //example of color change field
  inputText: string = '';

  today = new Date();
  longText = 'Very long text, whih needs to be truncated. ';
  
  

  @Input() childMessage: string = '';
  @Output() messageFromChild = new EventEmitter<string>();


  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
      }

  toggleState() { 
    this.isClickedState = true;
  }
  
  sendMessageToParent() {
    this.messageFromChild.emit('Це відповідь сина');
  }

}
