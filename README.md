# PROJET ANGULAR HERNANDEZ MATHIS B3

## Introduction

version de NodeJS: v20.17.0

version de NPM: 10.8.2

version de Angular: 17.3.12

version de Angular CLI: 17.3.9

commande de lancement: ng serve

### Compodoc

compodoc version: 1.1.25

lancer compodoc : npm run compodoc

### Component 

ng generate component Task

On créé un composant task pour pour afficher les infos d'un objet Task.

### Smart Dumb Patern

On créé composant main-task afin de déplacer la création de la tache dans le Smart component et donner les données au Dumb component qui les affiche correctement.

### Directives

ng generate directive task-list

On créé le composant task-list ainsi que la classe TaskList dans laquelle on met une liste de task

On créé ensuite la directive status-color ainsi que le *ngFor afin d'afficher chaque tache avec le nom correspondant a la couleur de son status.

### Pipes

ng generate pipe dateformat

On créé le pipe dateformat afin de modifier le format de la date.

On utilise ensuide la balise suivante pour appliquer notre pipe:

```angular
<p>{{curentTask.dateCreation | dateformat:'medium'}}</p>
```

### Router

On ajoute une route dans le app.routes.ts afin de rediriger vers [localhost:4200/display](http://localhost:4200/display) si on se connecte sur [localhost:4200](http://localhost:4200).

```angular
    {path: '', redirectTo: 'display', pathMatch: 'full'},
```

On utilise ensuite cette seconde route pour charger TaskModule lorsque l'on arrive sur [display](http://localhost:4200/display) (lazy loading):

```angular
{path: 'display', loadChildren:() => import('./tasks/tasks.module').then(m=> m.TasksModule)}
```


### Modules

ng generate module task

On créé le module tasks dans lequel on centralise tous les component, directives et pipe que l'on veut utiliser pour les tasks en enlevant les import et le standalone de ces fichiers.

On rajoute également les routes des composants que l'on utilise dans le fichier tasks-routing.module.

### Services

ng generate service crudtask-list-service

ng generate service ByStatutTaskListService

On créé un service crudtask-list-service dans lequel on déplace la créations de task-list en les récupérant via getTaskList.

On créé ensuite un service by-statut-task-list-service qui permet de récupérer la liste des staks qui on pour ETAT terminé afin de créer une archive des taches terminées.
