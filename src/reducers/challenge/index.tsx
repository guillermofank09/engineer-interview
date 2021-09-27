import { v4 as getId } from 'uuid';
import { Card, CardType } from 'types/Card';

export enum actions {
  new = 'new',
  moveToLeft = 'moveToLeft',
  moveToRight = 'moveToRightt',
}

export type Action = 
    { type: actions.new, title: string } 
    | { type: actions.moveToLeft, id: string }  
    | { type: actions.moveToRight, id: string }

 const getCardType = (type: CardType, action: actions) => {
     if(action === actions.moveToLeft){
        return type === CardType.done ? CardType.inProgress : CardType.todo
     } else {
        return type === CardType.todo ? CardType.inProgress : CardType.done
     }
 }

export const initialState: Card[] = []


export const reducer = (state: Card[], action: Action): Card[] => {
    switch (action.type) {
      case actions.new:
        return [
          ...state,
          {
            id: getId(),
            title: action.title,
            type: CardType.todo
          }
        ];
  
      case actions.moveToLeft:
        return state
          .map(card => {
            if (card.id === action.id) {
              return ({
                ...card,
                type: getCardType(card.type, actions.moveToLeft)              
              })
            }
            return card
          });
      case actions.moveToRight:
        return state
          .map(card => {
            if (card.id === action.id) {
              return ({
                ...card,
                type: getCardType(card.type, actions.moveToRight) 
              })
            }
          return card
        });
  
  
      default:
        return state
    }
  }