import React from "react";
import {Card} from "react-bootstrap";
import icon1 from "../assets/IconNumber1.svg";
import icon2 from "../assets/IconNumber2.svg";
import icon3 from "../assets/IconNumber3.svg";
import icon4 from "../assets/IconNumber4.svg";
import styled from "styled-components";

const images = [icon1,icon2,icon3,icon4]

const StyledCardText = styled(Card.Body)`
    font-size: 1.3vw;
    color: white;
    padding-top: 3px;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`

const StyledCardImage = styled(Card.Img)`
    width: 7vw;
    height: auto;
    margin: auto; /* Переносим margin: auto сюда */

    @media (max-width: 768px) {
        width: 13vw; /* Увеличиваем размер на маленьких экранах */
    }
`;


function CardMission({text, count}) {
    return (
        <Card className="d-flex flex-row justify-content-center align-items-center" style={{backgroundColor: 'transparent', border: "none", margin: "7vw 3vw"}}>
            <StyledCardImage src={images[count]} alt="Card image" />
            <StyledCardText>{text}</StyledCardText>
        </Card>
    )
}
export default CardMission;