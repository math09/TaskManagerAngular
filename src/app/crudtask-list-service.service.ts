import { Injectable } from '@angular/core';
import { TaskList } from './model/task-list';
import { ETAT } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListServiceService {
  private taskList =  new TaskList();

getTaskList(){

  this.taskList.tasks = [{ id: 1, name: 'TOEIC', description: 'Passer le TOEIC', etat: ETAT.EN_COURS, dateCreation: new Date() },
    { id: 2, name: 'Alternance', description: 'Trouver une alternance', etat: ETAT.EN_COURS, dateCreation: new Date() },
    { id: 2, name: 'Alternance', description: 'Trouver une alternance', etat: ETAT.TERMINEE, dateCreation: new Date() }
  ]
  return this.taskList
}
}
