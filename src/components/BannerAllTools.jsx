import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";
import bannerImg from '../assets/bannerAllTools.jpg';
import icon1 from '../assets/sectionAllToolsIcon/icon1.svg';
import icon2 from '../assets/sectionAllToolsIcon/icon2.svg';
import icon3 from '../assets/sectionAllToolsIcon/icon3.svg';
import icon4 from '../assets/sectionAllToolsIcon/icon4.svg';

export const BannerAllTools = () => {
    return (
        <Card className="bg-dark text-white rounded-0 border-0 mb-5">
            <Card.Img src={bannerImg} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center flex-column justify-content-between text-center">

                <Card.Title>
                    <h1 className="d-flex justify-content-center  text-center fw-bold" style={{ fontSize: '2.8vw', marginTop: '7vw', color: '#00D4C1'}}>
                        Все инструменты <br/>
                        для развития - в одном месте
                    </h1>
                </Card.Title>

                <Container fluid>
                    <Row className="mb-5">
                        <Col>
                            <Card style={{backgroundColor: 'transparent', border: "none"}}>
                                <Card.Img src={icon1} alt="Card image" className="m-auto" style={{  width: '9vw', height: 'auto' }} /> {/* Задаем ширину и высоту */}
                                <Card.Title style={{fontSize: '2vw', color: "white"}}>Индивидуальное развитие</Card.Title>
                                <Card.Body style={{fontSize: '0.9vw',color: "white", paddingTop: "3px"}}>Инвестируйте в себя и свой профессиональный рост. Откройте новые возможности для карьеры и личного успеха.</Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: 'transparent', border: "none"}}>
                                <Card.Img src={icon2} alt="Card image" className="m-auto" style={{ width: '9vw', height: 'auto' }} /> {/* Задаем ширину и высоту */}
                                <Card.Title style={{fontSize: '2vw', color: "white"}}>Корпоративное обучение</Card.Title>
                                <Card.Body style={{fontSize: '0.9vw',color: "white", paddingTop: "3px"}}>Развивайте навыки своей команды и повышайте эффективность бизнеса, без отрыва специалистов от производства.</Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: 'transparent', border: "none"}}>
                                <Card.Img src={icon3} alt="Card image" className="m-auto" style={{ width: '9vw', height: 'auto'}} /> {/* Задаем ширину и высоту */}
                                <Card.Title style={{fontSize: '2vw', color: "white", margin: 0}}>Онлайн-курсы</Card.Title>
                                <Card.Title style={{fontSize: '2vw', color: "white", margin: 0, opacity: '0%'}}>Онлайн-курсы</Card.Title>
                                <Card.Body style={{fontSize: '0.9vw',color: "white", paddingTop: "3px"}}>Учитесь в удобное время и в любом месте. Доступ к широкому выбору курсов от ведущих экспертов.</Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: 'transparent', border: "none"}}>
                                <Card.Img src={icon4} alt="Card image" className="m-auto" style={{ width: '9vw', height: 'auto' }} /> {/* Задаем ширину и высоту */}
                                <Card.Title style={{fontSize: '2vw', color: "white"}}>Персональный консалтинг</Card.Title>
                                <Card.Body style={{fontSize: '0.9vw',color: "white", paddingTop: "3px"}}>Получить лицензию или пройти аттестацию с нами - проще, чем вы думаете.</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Card.ImgOverlay>
        </Card>
    );
};