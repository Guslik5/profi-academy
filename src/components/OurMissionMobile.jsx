import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import CardMission from "./CardMission.jsx";
import styled from "styled-components";

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

function OurMissionMobile({data}) {

    return (
        <div className="p-2 mb-5">
            <Container className="bg-black rounded-5 mt-5" style={{ boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)"}}>
                <Row>
                    <h1 className="d-flex justify-content-center align-items-center mt-5" style={{color: "#00D4C1"}}>Наша миссия</h1>
                    {data.map((item, index) => {
                        return (
                            <>
                                <Col key={index} md={6}> {/*  md={6}  задает ширину в 50% на средних и больших экранах */}
                                    <CardMission  text={item.text} count={index} />
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default OurMissionMobile;