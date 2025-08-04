import {Button, Card, CardTitle, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";
import bannerImg from '../assets/bannerAllTools.jpg';
import icon1 from '../assets/sectionAllToolsIcon/icon1.svg';
import icon2 from '../assets/sectionAllToolsIcon/icon2.svg';
import icon3 from '../assets/sectionAllToolsIcon/icon3.svg';
import icon4 from '../assets/sectionAllToolsIcon/icon4.svg';
import styled from "styled-components";

const StyledCard = styled(Card)`
    background-color: transparent;
    border: none;
    text-align: center;

    .card-img-top {
        margin: 0 auto;
        width: 9vw;
        height: auto;
        transition: width 0.3s, height 0.3s;
    }

    .card-title {
        font-size: 2vw;
        color: white;
        transition: font-size 0.3s;
    }

    .card-body {
        font-size: 0.9vw;
        color: white;
        padding-top: 3px;
        transition: font-size 0.3s, opacity 0.3s;
    }

    @media (max-width: 1000px) {
        .card-body {
            opacity: 0;
            height: 0;
            overflow: hidden;
            padding: 0;
            margin: 0;
            font-size: 0;
        }

        .card-img-top {
            width: 6vw;
        }

        .card-title {
            font-size: 3vw;
        }
    }
`;



const StyledContainer = styled(Container)`
  @media (max-width: 1000px) {
    .row {
      display: flex;
      flex-wrap: wrap;
    }

    .col {
      width: 50%;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;

const StyledH1 = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 2.8vw;
    margin-top: 7vw;
    color: #00D4C1;
    
    @media (max-width: 1000px) {
        margin-top: 0vw;
    }
`

export const BannerAllTools = () => {
    return (
        <Card className="bg-dark text-white rounded-0 border-0 mb-5">
            <Card.Img src={bannerImg} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center flex-column justify-content-between text-center">

                <Card.Title>
                    <StyledH1>
                        Все инструменты <br/>
                        для развития - в одном месте
                    </StyledH1>
                </Card.Title>

                <StyledContainer fluid>
                    <Row className="mb-5">
                        <Col>
                            <StyledCard>
                                <Card.Img variant="top" src={icon1} alt="Card image" className="card-img-top" />
                                <Card.Title className="card-title">Индивидуальное развитие</Card.Title>
                                <Card.Body className="card-body">
                                    Инвестируйте в себя и свой профессиональный рост. Откройте новые возможности для карьеры и личного успеха.
                                </Card.Body>
                            </StyledCard>
                        </Col>
                        <Col>
                            <StyledCard>
                                <Card.Img variant="top" src={icon2} alt="Card image" className="card-img-top" />
                                <Card.Title className="card-title">Корпоративное обучение</Card.Title>
                                <Card.Body className="card-body">
                                    Развивайте навыки своей команды и повышайте эффективность бизнеса, без отрыва специалистов от производства.
                                </Card.Body>
                            </StyledCard>
                        </Col>
                        <Col>
                            <StyledCard>
                                <Card.Img variant="top" src={icon3} alt="Card image" className="card-img-top" />
                                <Card.Title className="card-title">Онлайн-курсы</Card.Title>
                                <Card.Body className="card-body">
                                    Учитесь в удобное время и в любом месте. Доступ к широкому выбору курсов от ведущих экспертов.
                                </Card.Body>
                            </StyledCard>
                        </Col>
                        <Col>
                            <StyledCard>
                                <Card.Img variant="top" src={icon4} alt="Card image" className="card-img-top" />
                                <Card.Title className="card-title">Персональный консалтинг</Card.Title>
                                <Card.Body className="card-body">
                                    Получить лицензию или пройти аттестацию с нами - проще, чем вы думаете.
                                </Card.Body>
                            </StyledCard>
                        </Col>
                    </Row>
                </StyledContainer>

            </Card.ImgOverlay>
        </Card>
    );
};