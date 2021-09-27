import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: min-content auto min-content;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 18px;
`

const Button = styled.button`
    border-radius: 8px;
    padding: 10px 10px;
    cursor: pointer;

    &:disabled {
        cursor: default;
    }

    & svg {
        fill: white;
        width: 25px;
    }
`

export const LeftButton = styled(Button)`
    background: #C20B0B;

    &:disabled {
        background: rgba(255, 158, 158, 1);
    }
`

export const RightButton = styled(Button)`
    background: #218D1F;

    &:disabled {
        background: rgba(33, 141, 31, 0.32);
    }
`

export const Title = styled.span`
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    margin-top: auto;
    margin-bottom: auto;
`