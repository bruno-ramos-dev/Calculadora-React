import { OperationButtonContainer } from "./styles"

const OperationButton = ({label, onClick}) => {
    return (
        <OperationButtonContainer onClick={onClick} type='button'>
            {label}
        </OperationButtonContainer>
    )
}

export { OperationButton }