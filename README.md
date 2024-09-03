# PROJET ANGULAR HERNANDEZ MATHIS B3

## Introduction

Version de NodeJS: v20.17.0

Version de NPM: 10.8.2

Version de Angular: 17.3.12

Version de Angular CLI: 17.3.9

Commande de lancement: ng serve

### Compodoc

Compodoc version: 1.1.25

Lancer compodoc : npm run compodoc

### Component 

ng generate component Task

On crée un composant task pour afficher les informations d'un objet Task.

### Smart Dumb Pattern

On crée composant main-task afin de déplacer la création de la tache dans le Smart component et transmettre les données au Dumb component qu'il les affiche correctement.

### Directives

ng generate directive task-list

On crée le composant task-list ainsi que la classe TaskList dans laquelle on met une liste de tasks

On crée ensuite la directive status-color ainsi que le *ngFor afin d'afficher chaque tache avec le nom correspondant a la couleur de son status.

### Pipes

ng generate pipe dateformat

On crée le pipe dateformat afin de modifier le format de la date.

On utilise ensuite la balise suivante pour appliquer notre pipe:

```angular
<p>{{currentTask.dateCreation | dateformat:'medium'}}</p>
```

### Router

On ajoute une route dans le fichier app.routes.ts afin de rediriger vers [localhost:4200/display](http://localhost:4200/display) si on se connecte sur [localhost:4200](http://localhost:4200).

```angular
    {path: '', redirectTo: 'display', pathMatch: 'full'},
```

On utilise ensuite cette seconde route pour charger le TaskModule lorsque l'on accède à [display](http://localhost:4200/display) (lazy loading):

```angular
{path: 'display', loadChildren:() => import('./tasks/tasks.module').then(m=> m.TasksModule)}
```


### Modules

ng generate module task

On crée le module tasks dans lequel on centralise tous les component, directives et pipe que l'on veut utiliser pour les tasks en enlevant les import et le standalone de ces fichiers.

On rajoute également les routes des composants que l'on utilise dans le fichier tasks-routing.module.

### Services

ng generate service crudtask-list-service

ng generate service ByStatutTaskListService

On crée un service crudtask-list-service dans lequel on déplace la créations de la task-list en les récupérant via getTaskList.

On crée ensuite un service by-statut-task-list-service qui permet de récupérer la liste des tasks qui on pour ETAT terminé afin de créer une archive des tâches terminées.
