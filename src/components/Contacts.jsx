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

function Contacts({id}) {
    return (
        <>
        {/*<Container fluid style={{width: "90%"}}>
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
            </Container>*/}

            <Container fluid className="bg-white rounded-5" style={{ width: "90%", boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.7)" }} id={id}>
                <Row className="d-flex justify-content-center align-items-start p-5 my-5">
                    <Col className="d-flex flex-column align-items-center text-center" md={4}>
                        <div className="fw-bold fs-5 mt-0 mb-3 d-flex align-items-center">
                            <img src={locationIcon} alt="значек локации" style={{ width: 30, height: 30, marginRight: 10 }} />
                            Расположение офиса
                        </div>
                        <div>
                            Санкт-Петербург, Ленинский пр-т, д.168, БЦ Энергия, офис 509.
                        </div>
                    </Col>

                    <Col className="d-flex flex-column align-items-center text-center" md={4}>
                        <div className="fw-bold fs-5 mt-0 mb-3 d-flex align-items-center">
                            <img src={phoneIcon} alt="значек телефона" style={{ width: 30, height: 30, marginRight: 10 }} />
                            Телефон
                        </div>
                        <div className="d-flex flex-column">
                            <a href="tel:+78006006330" className="text-decoration-none text-black">+7 (800) 600-63-30</a>
                        </div>
                    </Col>

                    <Col className="d-flex flex-column align-items-center text-center" md={4}>
                        <div className="fw-bold fs-5 mt-0 mb-3 d-flex align-items-center">
                            <img src={timeIcon} alt="значек часов" style={{ width: 30, height: 30, marginRight: 10 }} />
                            Рабочее время
                        </div>
                        <div>
                            <Container className="d-flex flex-column justify-content-center align-items-center">
                                <Container className="d-flex flex-column justify-content-center align-items-center">

                                    {/* Контейнер для расписания с фиксированной шириной 80% */}
                                    <div style={{ width: "80%" }}>

                                        {/* Строка 1: Пн-Чт */}
                                        <div className="d-flex justify-content-between mb-1">
                                            <div style={{ minWidth: '100px' }}>Пн-Чт:</div>
                                            <div style={{ minWidth: '100px' }}>09:30-18:00</div>
                                        </div>

                                        {/* Строка 2: Пт */}
                                        <div className="d-flex justify-content-between mb-1">
                                            <div style={{ minWidth: '100px' }}>Пт:</div>
                                            <div style={{ minWidth: '100px' }}>9:30-17:00</div>
                                        </div>

                                        {/* Строка 3: Сб-Вс */}
                                        <div className="d-flex justify-content-between">
                                            <div style={{ minWidth: '100px' }}>Сб-Вс:</div>
                                            <div style={{ minWidth: '100px' }}>Закрыто</div>
                                        </div>

                                    </div>
                                </Container>

                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Contacts;

