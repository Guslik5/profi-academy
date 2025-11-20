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


function BlackContainerForHomePage({title, text}) {
    return (
        <StyledContainer className="rounded-5 my-5">
            {/*<RoundedRow>{title}</RoundedRow>*/}
            <Row className="mx-3">
                <Col className="d-flex justify-content-center align-items-center fs-1">{text}</Col>
            </Row>
        </StyledContainer>
    );
}

export default BlackContainerForHomePage;