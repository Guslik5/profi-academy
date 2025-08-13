import React from "react";
import {Col, Container, Nav, Row} from "react-bootstrap";
import womenImg from '../assets/womenContacts.svg'
import styled from "styled-components";
import locationIcon from "../assets/locationIcon.svg";
import phoneIcon from "../assets/phoneIcon.svg";
import timeIcon from "../assets/timeIcon.svg";

const StyledColImg = styled(Col)`
    @media (max-width: 768px) {
        display: none;
    }
`

const StyledHeaderText = styled.div`
    font-size: 2.5vw;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`
const StyledSecondaryText = styled.div`
    font-size: 1.5vw;
    margin: 2vw;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

function Contacts() {
    return (
        <>
            <Container fluid style={{width: "90%"}}>
                <Row>
                    <StyledColImg md={6}>
                        <img src={womenImg} alt="Консультант" width="100%"/>
                    </StyledColImg>
                    <Col md={6} className="d-flex flex-column bg-white rounded-5" style={{boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)"}}>
                        <StyledHeaderText className="m-5">
                            Контакты
                        </StyledHeaderText>
                        <StyledSecondaryText>
                            Мы всегда рады помочь вам! Свяжитесь с нами любым удобным способом. Наши контакты указаны ниже, или вы можете воспользоваться формой обратной связи, и мы оперативно ответим на ваш запрос.
                        </StyledSecondaryText>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="bg-white rounded-5" style={{width: "90%", boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)"}}>
                <Row className="d-flex justify-content-center align-items-center p-5 my-5">
                    <Col className="text-center" md={4}>
                        <div className="fw-bold fs-5 m-3 d-flex justify-content-center align-items-center">
                            <img src={locationIcon} alt="значек локации"/>
                            Расположение офиса
                        </div>
                        <div>
                            Санкт-Петербург, Ленинский пр-т, <br/> д. 168, офис 509.
                        </div>
                    </Col>
                    <Col className="text-center" md={4}>
                        <div className="fw-bold fs-5 m-3 d-flex justify-content-center align-items-center">
                            <img src={phoneIcon} alt="значек телефона"/>
                            Телефон
                        </div>
                        <div className="d-flex flex-column">

                                <a href="tel:+79531509336" className="text-decoration-none text-black">+7 (953) 150-93-36</a>
                                <br/>
                                <a href="tel:+79531509336" className="text-decoration-none text-black">+7 (953) 150-93-36</a>

                        </div>
                    </Col>
                    <Col className="text-center" md={4}>
                        <div className="fw-bold fs-5 m-3 d-flex justify-content-center align-items-center">
                            <img src={timeIcon} alt="значек часов"/>
                            Рабочее время
                        </div>
                        <div>
                            Пн-Чт: 10:00-20:00 <br/>
                            Пт: 9:30-17:00 <br/>
                            Сб-Вс: Закрыто <br/>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Contacts;

