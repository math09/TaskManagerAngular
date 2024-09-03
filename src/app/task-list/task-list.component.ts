import { TaskList } from './../model/task-list';
import { Component, Input, OnInit } from '@angular/core';
import { Task, ETAT } from '../model/task';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent  {
 @Input() tasks!: Task[];

}
