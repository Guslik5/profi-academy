import React from "react";
import {Col, Container, ListGroup, ListGroupItem, Nav, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

import whatsAppIcon from '../assets/iconWhatsApp.svg'
import tgIcon from '../assets/iconTg.svg'
import vkIcon from '../assets/iconVk.svg'

import styled from 'styled-components';

const StyledCol = styled(Col)`
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        display: inline-block;
        margin: 0.5em;

        img {
          width: 32px;
          height: 32px;
          transition: filter 0.3s ease; /* Add transition for smooth effect */

          &:hover {
            filter: brightness(0.7); /* Darken the image on hover */
          }
        }
      }
    `;

const FooterContainer = styled.footer`
  background-color: #292929;
  color: white;
  padding: 20px 0;
`;

const CategoryTitle = styled.h5`
  color: white;
  margin: 0 3rem 0 0;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  font-weight: bold;
`;

const StyledListGroupItem = styled(ListGroupItem)`
  background-color: transparent;
  border: none;
  padding: 5px 0;
    color: white;
    text-decoration: none;
    
    &:hover {
      color: #cccccc;
    }
  `;

const CopyrightText = styled.p`
  color: white;
  font-size: 0.8rem;
`;

function Footer() {
    const footerData = [
        {
            category: "О нас",
            links: [
                { name: "Наша миссия", url: "#" },
                { name: "Документы", url: "/documents" },
                { name: "Контакты", url: "#" },
            ],
        },
        {
            category: "Обучение",
            links: [
                { name: "Рабочие профессии", url: "#" },
                { name: "Повышение квалификации", url: "#" },
                { name: "Профессиональная переподготовка", url: "#" },
                { name: "Пожарная безопасность", url: "#" },
                { name: "Охрана труда, первая помощь, высота, ОЗП", url: "#" },
            ],
        },
        {
            category: "Консалтинг",
            links: [
                { name: "Лицензирование", url: "#" },
                { name: "Аттестация", url: "#" },
                { name: "Вступление в СРО", url: "#" },
                { name: "Пожарный аудит", url: "#" },
                { name: "СОУТ", url: "#" },
                { name: "Расчет рисков", url: "#" },
            ],
        },
    ];

    const dataIcons = [
        {
            href: "#",
            alt: "Вотс апп",
            image: whatsAppIcon
        },
        {
            href: "#",
            alt: "Телеграм",
            image: tgIcon
        },
        {
            href: "#",
            alt: "Вк",
            image: vkIcon
        }
    ]

    const handleClick = (href) => {
        window.open(href, '_blank');
    }

    return (
        <FooterContainer>
            <Container>
                <Row className="border-bottom p-5">
                    {footerData.map((category, index) => (
                        <Col key={index} md={4} sm={6} xs={12}>
                            <CategoryTitle>{category.category}</CategoryTitle>
                            <ListGroup variant="flush">
                                {category.links.map((link, linkIndex) => (
                                    <StyledListGroupItem key={linkIndex} as={Link} to={link.url}>
                                        {link.name}
                                    </StyledListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>
                    ))}
                </Row>
                <Row className="mt-3 d-flex justify-content-center align-items-center">
                    <Col md={3} className="text-center">
                        <Nav.Link href="tel:+71234567890" className="p-0">+7 (123) 456-78-90</Nav.Link>

                    </Col>
                    <Col md={3} className="text-center">
                        <Nav.Link href="mailto:akademia-profi@mail.ru" className="p-0">akademia-profi@mail.ru</Nav.Link>
                    </Col>
                    <Col md={3} className="text-center">
                        Адрес (Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas )
                    </Col>
                    <StyledCol md={3} className="d-flex justify-content-center align-items-center">
                        {dataIcons.map((item, index) => {
                            return (
                                <>
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => handleClick(item.href)}
                                        style={{display: 'inline-block', margin: "0.5em"}} // Чтобы можно было задать ширину и высоту
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            style={{width: '32px', height: '32px'}} // Настройте размеры
                                        />
                                    </a>
                                </>
                            )
                        })}

                    </StyledCol>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <CopyrightText>  Академия профи.  <br/> Все права защищены.<br/> &copy; {new Date().getFullYear()}</CopyrightText>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    );
}
export default Footer;
