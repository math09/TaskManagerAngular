export class Task {
  'id': number
  'name': string
  'description': string
  'etat': ETAT
  'dateCreation': Date
}

export enum ETAT {
  EN_COURS = 'EN COURS',
  A_FAIRE = 'A FAIRE',
  TERMINEE = 'TERMINEE'

}
