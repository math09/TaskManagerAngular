import { DateformatPipe } from './../pipes/dateformat.pipe';
import { Component, Input } from '@angular/core';
import { ETAT, Task } from './../model/task'
import { CommonModule } from '@angular/common';
import { StatusColorDirective } from '../directives/status-color.directive';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() curentTask!: Task;

}
