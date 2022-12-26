import { EqualButtonContainer } from "./styles"

const EqualButton = ({label, onClick}) => {
    return (
        <EqualButtonContainer onClick={onClick} type='button'>
            {label}
        </EqualButtonContainer>
    )
}

export { EqualButton }