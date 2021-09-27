import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    gap: 32px;
    grid-template-columns: auto min-content;
`

export const Input = styled.input`
    width: 100%;
    padding: 15px 35px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    font-size: 22px;
`

export const Button = styled.button`
    background: #0066FF;
    border-radius: 8px;
    padding: 0px 20px;
    cursor: pointer;

    &:disabled {
        background: #5b9afa;
        cursor: default;
    }

    & svg {
        fill: white;
        width: 15px;
    }
`