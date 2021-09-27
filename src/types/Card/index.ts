export enum CardType {
    todo= 'todo',
    inProgress= 'inProgress',
    done= 'done',
  } 


export type Card = {
    id: string
    title: string,
    type: CardType
  }