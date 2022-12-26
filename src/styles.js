import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    padding: .5em;
    background-color: #202020;
    color: #000;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

    h3 {
        font-size: .8em;
        font-weight: 300;
        color: #666;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3px;
`