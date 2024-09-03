import { Task } from '../model/task';

export class TaskList {
  filter(arg0: (task: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  tasks!: Task[];
}
