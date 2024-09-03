import { Task } from "./model/task";

export interface IByStatutTaskService {
    getTasksByStatut(statut: string): Task[];
}
