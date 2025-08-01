import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import bannerImg from "../assets/bannerMission.jpg";
import CardMission from "./CardMission.jsx";


function OurMissionDesktop({data}) {


    return (
        <Card className="bg-dark text-white rounded-0 border-0 mb-5">
            <Card.Img src={bannerImg} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center flex-column justify-content-around text-center">
                <Card.Title>
                    <h1 className="d-flex justify-content-center  text-center fw-bold mt-5" style={{ fontSize: '3vw', color: '#00D4C1'}}>
                        Наша миссия.
                    </h1>
                </Card.Title>
                <Container fluid>
                    <Row className="mb-5">
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
            </Card.ImgOverlay>
        </Card>
    )
}

export default OurMissionDesktop;