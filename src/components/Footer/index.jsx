import { FooterContainer } from "./styles"

const Footer = ({name}) => {
    return (
        <FooterContainer>
        Feito por <a href="https://instagram.com/brunoramosgtr" target="_blank" rel="noreferrer">{name}</a> 🤘
        </FooterContainer>
    )
}

export { Footer }