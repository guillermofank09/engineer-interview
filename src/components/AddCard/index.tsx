import React, { ReactElement, useState } from 'react'
import { Container, Input, Button } from './styled'
import { ReactComponent as Add } from 'resources/assets/svg/add.svg'
import { actions } from 'reducers/challenge'
import { useContextDispatch } from 'context'

const AddCard:React.FC = (): ReactElement => {

    const [title, setTitle] = useState<string>('')
    const dispatch = useContextDispatch()

    const hasContent = () => {
        return title.trim() !== ''
    }

    const addNewCard = () => {
        if(hasContent()){
            dispatch({type: actions.new, title })
            setTitle('')
        }
    }

    return (
        <Container>
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Add Task'
            />
            <Button
                className="plus"
                onClick={() => addNewCard()}
                disabled={!hasContent()}
            >
                <Add />
            </Button>
        </Container>
    )
}

export default AddCard