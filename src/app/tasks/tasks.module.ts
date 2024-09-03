import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { MainTaskComponent } from '../main-task/main-task.component';
import { TaskComponent } from '../task/task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { StatusColorDirective } from '../directives/status-color.directive';
import { DateformatPipe } from '../pipes/dateformat.pipe';


@NgModule({
  declarations: [TaskComponent, MainTaskComponent, TaskListComponent, StatusColorDirective, DateformatPipe],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
