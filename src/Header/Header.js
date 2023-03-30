import { Button, Container } from "react-bootstrap"

import './Header.css'

function Header(props) {
    return(
        <header>
            <nav>
                <Container>
                    <a href="#">История</a>
                    <a href="#">Статистика</a>
                </Container>
            </nav>
        </header>
    )
}

export default Header