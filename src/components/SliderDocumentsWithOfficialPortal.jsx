import {Carousel, Col, Container, Row} from "react-bootstrap";
import documentPhoto1 from "../assets/tempDocumentImage.jpg";
import React from "react";
import styled from "styled-components";


const StyledContainer = styled(Container)`
  /* Для мобильных устройств (маленьких экранов) */
  @media (max-width: 767.98px) {
      max-width: 90%; /* Или другое подходящее значение */
      margin-left: auto;
      margin-right: auto;
      padding-left: 15px; /* Добавьте боковые отступы */
      padding-right: 15px; /* Добавьте боковые отступы */
  }
`;

const StyledCol = styled(Col)`
    font-size: 1.3vw;

    @media (max-width: 768px) {
        font-size: 3vw; /* Исправлено: убраны лишние скобки и значение изменено */
    }

    @media (max-width: 480px) {
        font-size: 4vw; /* Исправлено: убраны лишние скобки и значение изменено */
    }
`;

const StyledCarousel = styled(Carousel)`
    
    .carousel-item img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    /* Media запросы для адаптации на разных экранах */
    @media (max-width: 768px) {
        .carousel-wrapper {
            width: 95vw;
        }
    }

    @media (max-width: 480px) {
        .carousel-wrapper {
            width: 100vw;
        }
    }
    
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        /* Убираем стандартный фон */
        background-color: transparent !important;
        background-image: none; /* Убираем стандартную иконку */
        display: inline-block;
        width: 30px; /* Настраиваем размер иконок */
        height: 30px;

    }

    .carousel-control-prev-icon {
        position: absolute;
        left: -40px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E") !important;
        /* Для старых браузеров */
        -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E") !important;
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E") !important;
    }

    .carousel-control-next-icon {
        position: absolute;
        right: -40px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E") !important;
        /* Для старых браузеров */
        -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E") !important;
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E") !important;
    }
`;

function SliderDocumentsWithOfficialPortal() {
    return (
        <StyledContainer className="mx-auto bg-white px-3 py-5 m-5 shadow-lg rounded-5">
            <Row>
                <StyledCol md={6} className="d-flex justify-content-center align-items-center p-5 custom-text">
                    Мы гарантируем подлинность всех документов, предоставляемых нашей компанией. Для вашей уверенности вы можете самостоятельно проверить легитимность документа на официальном государственном портале: [ссылка на портал].
                </StyledCol>
                <Col md={6} className="d-flex justify-content-center align-items-center px-5 fs-5">
                    <StyledCarousel style={{ width: '45%', height: 'auto' }} >
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={documentPhoto1}
                                alt="First slide"

                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block"
                                src={documentPhoto1}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </StyledCarousel>
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default SliderDocumentsWithOfficialPortal;