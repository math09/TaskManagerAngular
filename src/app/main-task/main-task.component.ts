import { Component, OnInit } from '@angular/core';
import { ETAT } from '../model/task';
import { TaskList } from '../model/task-list';
import { CRUDTaskListServiceService } from '../crudtask-list-service.service';
import { ByStatutTaskListServiceService } from '../by-statut-task-list-service.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrl: './main-task.component.css'
})

export class MainTaskComponent{
  taskList!: TaskList;
  archivedTaskList!: TaskList;


  constructor(private CRUDTaskListServiceService: CRUDTaskListServiceService, private bystatutService : ByStatutTaskListServiceService){
    this.taskList = CRUDTaskListServiceService.getTaskList()
    this.archivedTaskList = bystatutService.getTasksByStatut(ETAT.TERMINEE);
  }


}
