import React, { useReducer } from 'react'
import CardList, { CardListType } from 'components/CardList'
import { CardType } from 'types/Card'
import AddCard from 'components/AddCard'
import { reducer, initialState } from 'reducers/challenge'
import { Container } from './styled'
import { DispatchContext } from 'context'

const Challenge = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <Container>
        <CardList title={CardListType.todo} cards={state.filter(card => card.type === CardType.todo)} />
        <CardList title={CardListType.inProgress} cards={state.filter(card => card.type === CardType.inProgress)} />
        <CardList title={CardListType.done} cards={state.filter(card => card.type === CardType.done)} />
        <AddCard />
      </Container>
    </DispatchContext.Provider>
  )
}

export default Challenge
