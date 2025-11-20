import React from "react";
import {Col, Container, ListGroup, ListGroupItem, Nav, NavDropdown, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

import whatsAppIcon from '../assets/iconWhatsApp.svg'
import tgIcon from '../assets/iconTg.svg'
import vkIcon from '../assets/iconVk.svg'


import styled from 'styled-components';
import AccessibilityButton from "./AccessibilityButton.jsx";
import logo from "../assets/logo.png";

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

  padding-bottom: 5px;
  border-bottom: 1px solid white;
  font-weight: bold;
    text-align: center;
`;

const StyledListGroupItem = styled(ListGroupItem)`
  background-color: transparent;
  border: none;
  padding: 5px 0;
    color: white;
    text-decoration: none;
    text-align: center;
    
    &:hover {
      color: #cccccc;
    }
  `;

const CopyrightText = styled.p`
  color: white;
  font-size: 0.9rem;
`;

function Footer() {
    
    const footerData = [
        {
            category: "О нас",
            links: [
                { name: "Документы", url: "/documents" },
                { name: "Контакты", url: "#" },
            ],
        },
        
        {
            category: "Обучение",
            links: [
                { name: "Рабочие профессии", url: "/courses/92" },
                { name: "Повышение квалификации", url: "/courses/96" },
                { name: "Профессиональная переподготовка", url: "/courses/94" },
                { name: "Пожарная безопасность", url: "/courses/1" },
                { name: "Охрана труда", url: "/courses/98" },
            ],
        },
        {
            category: "Консалтинг",
            links: [
                { name: "Лицензирование", url: "/courses/100" },
                { name: "Аттестация специалистов", url: "/courses/102" },
                { name: "Вступление в НРС", url: "/courses/104" },
                { name: "Вступление в СРО", url: "/courses/106" },
                { name: "СОУТ и расчет рисков", url: "/courses/170" },
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
            href: "https://vk.com/akademiaprofispb",
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
                                    <StyledListGroupItem key={linkIndex} as={Link} to={link.url} onClick={() => scroll.scrollToTop()}>
                                        {link.name}
                                    </StyledListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>
                    ))}
                </Row>
                <Row className="mt-3 d-flex justify-content-center ">
                    <Col md={4} className="text-center">
                        <Nav.Link href="tel:+78006006330" className="p-0">8 (800) 600-63-30</Nav.Link>
                        <Nav.Link href="tel:+79675202425" className="p-0"> 8 (967) 520-24-25</Nav.Link>
                        <Nav.Link href="mailto:info@akademiaprofi.ru" className="p-0">info@akademiaprofi.ru</Nav.Link>
                        <div>
                            Санкт-Петербург, Ленинский пр-т, д. 168, БЦ Энергия, офис 509.
                        </div>

                    </Col>
                    <Col md={4} className="text-center">
                        <StyledCol className="d-flex justify-content-center align-items-center">
                            {dataIcons.map((item, index) => {
                                return (
                                    <>
                                        <a
                                            key={index}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => handleClick(item.href)}
                                            style={{display: 'inline-block', margin: "0.5em"}}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                style={{width: '32px', height: '32px'}}
                                            />
                                        </a>
                                    </>
                                )
                            })}

                        </StyledCol>
                    </Col>
                    <Col md={4} className="text-center">

                        <Row>
                            <Col className="text-center">
                                <CopyrightText> ООО "АКАДЕМИЯ ПРОФИ"  <br/> ИНН: 9810001506 <br/> Все права защищены.<br/> &copy; {new Date().getFullYear()}</CopyrightText>

                            </Col>
                        </Row>
                    </Col>

                </Row>

                <AccessibilityButton/>
            </Container>
        </FooterContainer>
    );
}
export default Footer;
