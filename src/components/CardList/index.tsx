import React, { ReactElement } from 'react'
import { Card as CardEntity } from 'types/Card'
import Card from '../Card'
import { Container, Title } from './styled'

export enum CardListType {
    todo = 'To Do',
    inProgress = 'In Progress',
    done = 'Done'
}

interface ICardList {
    title: CardListType
    cards: CardEntity[]
}

const CardList: React.FC<ICardList> = ({ title, cards }): ReactElement => {
    return (
        <Container>
            <Title>{title}</Title>
            {cards.map((item) => <Card key={item.id} card={item} />)}
        </Container>)

} 

export default CardList