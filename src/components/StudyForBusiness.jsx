import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import arrowDownIcon from '../assets/arrowDownIcon.svg';

const RoundedRow = styled(Row)`
    display: inline-block;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    margin: 0.5rem 2rem;
`;

const StyledContainer = styled(Container)`
    background-color: black;
    color: white;
    padding-top: 1.5rem; /* Slightly increased padding */
    padding-bottom: 2rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);
    

  /* Для мобильных устройств (маленьких экранов) */
  @media (max-width: 767.98px) {
      max-width: 90%; /* Или другое подходящее значение */
      margin-left: auto;
      margin-right: auto;
      padding-left: 15px; /* Добавьте боковые отступы */
      padding-right: 15px; /* Добавьте боковые отступы */
      font-size: 1rem;
  }
`;

function StudyForBusiness() {
    return (
        <StyledContainer className="rounded-5 my-5">
            <RoundedRow>Обучение для бизнеса</RoundedRow>
            <Row className="mx-3 ">
                <Col md={9} className="d-flex align-items-center fs-3">Ваш текст(Ut enim ad minim veniam, qui blanditiis praesentium)</Col>
                <Col md={3} className="d-flex justify-content-center">
                    <img src={arrowDownIcon} alt="стрелка вниз"/>
                    <img src={arrowDownIcon} alt="стрелка вниз"/>
                    <img src={arrowDownIcon} alt="стрелка вниз"/>
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default StudyForBusiness;

