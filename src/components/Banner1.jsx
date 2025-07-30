import React from 'react';
import '../App.css';
import {Col, Container, Row} from "react-bootstrap";
import photoBanner from '../assets/bannerPhoto1.png'
import Button from "react-bootstrap/Button";
import styled from 'styled-components';

const StyledButton = styled.button`
  /* Базовые стили */
  width: 55%;
  border-radius: 30px;
  font-size: 1.3vw;
  color: black;
  background-color: transparent;
  padding: 0.5rem 1rem; /* Добавлен padding для визуального баланса */
  text-align: center;
  cursor: pointer; /* Добавляем курсор pointer для интерактивности */
  border: #004E47 1px solid; /* Убедимся, что бордер виден */
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; 
    
    /* Media запросы для адаптации на разных экранах */
    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
    



    /* Стили при наведении */
  &:hover {
    background-color: #00998B;
    border-color: #00998B;
    color: white;
  }

  /* Убираем дефолтные стили Bootstrap (если нужно) */
  &.btn-outline-primary {
    background-color: transparent;
    border-color: #004E47;
      color: white;
  }

  &.btn-outline-primary:hover {
    background-color: #7DF9FF;
    border-color: #7DF9FF;
      color: white;
  }
`;


function Banner() {
    return (
        <div className="banner" style={{ padding: '20px' }}>
            <Container fluid className="my-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="text-column">
                            <h1 className="d-flex justify-content-center  text-center fw-bold" style={{ fontSize: '2.8vw', marginBottom: '8vw' }}>
                                Ваш <br/>
                                профессиональный <br/>
                                рост - наша миссия.
                            </h1>
                            <div className="d-flex justify-content-center">
                                <StyledButton
                                    variant="outline-primary"
                                    className="text-center"
                                >
                                    Консультация бесплатно
                                </StyledButton>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-end">
                        <img
                            src={photoBanner}
                            alt="фотография банера"
                            className="img-fluid"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Banner;