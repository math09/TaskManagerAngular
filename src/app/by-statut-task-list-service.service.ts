import { Injectable } from '@angular/core';
import { TaskState } from 'zone.js/lib/zone-impl';
import { ETAT, Task } from './model/task';
import { CRUDTaskListServiceService } from './crudtask-list-service.service';
import { TaskList } from './model/task-list';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListServiceService {

  constructor(private crudService: CRUDTaskListServiceService) {}


getTasksByStatut(statut: ETAT): TaskList {
    const tasks = this.crudService.getTaskList();
    console.log('Toutes les tâches avant filtrage:', tasks);

    let newTaskList = new TaskList();
    newTaskList.tasks = tasks.tasks.filter(task => {
        const match = task.etat === statut;
        console.log(`Tâche ${task.name} avec statut ${task.etat} comparé à ${statut}: ${match}`);
        return match;
    });
    console.log('Tâches filtrées:', newTaskList.tasks);
    return newTaskList;
}

}
