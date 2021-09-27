import React, { ReactElement } from 'react'
import { Card as CardEntity, CardType } from 'types/Card'
import { Container, RightButton, LeftButton, Title } from './styled'
import { ReactComponent as ArrowRight } from 'resources/assets/svg/arrow-right.svg'
import { ReactComponent as ArrowLeft } from 'resources/assets/svg/arrow-left.svg'
import { useContextDispatch } from 'context'
import { actions } from 'reducers/challenge'

interface ICard {
    card: CardEntity
}

const Card: React.FC<ICard> = ({ card }): ReactElement => {

    const { id, title, type } = card
    const dispatch = useContextDispatch()

    return (
        <Container>
            <LeftButton disabled={type === CardType.todo} onClick={() => dispatch({type: actions.moveToLeft, id })}>
                <ArrowLeft />
            </LeftButton>
            <Title>{title}</Title>
            <RightButton disabled={type === CardType.done} onClick={() => dispatch({type: actions.moveToRight, id })}>
                <ArrowRight />
            </RightButton>
        </Container>)

} 

export default Card