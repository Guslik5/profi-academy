import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import searchIcon from '../assets/searchIcon.png'
import styled from 'styled-components';

const StyledNavDropdown = styled(NavDropdown)`
  &.nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
  }
    
  .dropdown-menu {
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    border: none;
    padding: 10px;
  }
    
  .dropdown-menu .dropdown-item {
    border-radius: 10px;
      &:active {
          background-color: #00776B  !important;; 
          border-color: #00776B  !important;;
          box-shadow: none  !important;; 
      }
  }
    &:hover > .dropdown-menu {
        display: block !important; 
    }
`;
const StyledButton = styled(Button)`
    height: 70px;
    background-color: #00998B;
    border: 1px solid #00998B;
    border-radius: 20px;
    color: white;
    
    &:hover {
        box-shadow: none;
        background-color: #00776B;
        border-color: #00776B;
    }

    /* Смена цвета при клике */
    &:active {
        background-color: #00554B  !important;; /* Более темный оттенок при клике */
        border-color: #00554B  !important;;
        box-shadow: none  !important;; /* Убираем тень при клике */
    }
    @media (max-width: 992px) {
        width: 50%;
        display: flex;
        margin: auto;
        justify-content: center;
        align-items: center;
    }
`;



function Header() {

    const handleClick = () => {
        window.scroll(8200,8200)
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary mx-4 " style={{borderBottom: "1px solid #9E9E9E"}}>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Логотип"
                        height="94"
                        className="d-inline-block align-top mx-5"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-between w-100">
                        <Nav.Item className="d-flex justify-content-center align-items-center fs-5 ">
                            <img src={searchIcon} alt="Лупа"/>
                            поиск
                        </Nav.Item>
                        <StyledNavDropdown title="О нас" id="about" className="d-flex flex-column justify-content-center align-items-center fs-5">
                            <NavDropdown.Item as={Link} to="/ourMission">Наша миссия</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/documents">Документы</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/contacts">Контакты</NavDropdown.Item>
                        </StyledNavDropdown>

                        <StyledNavDropdown title="Обучение" id="study" className="d-flex flex-column justify-content-center align-items-center fs-5 ">
                            <NavDropdown.Item as={Link} to="/work-professions">Рабочие профессии</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/qualification-improvement">Повышение квалификации</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/professional-retraining">Профессиональная переподготовка</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fire-safety">Пожарная безопасность</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/labor-protection">Охрана труда, первая помощь,<br/> высота, ОЗП</NavDropdown.Item>
                        </StyledNavDropdown>

                        <StyledNavDropdown title="Консалтинг" id="consulting" className="d-flex flex-column justify-content-center align-items-center fs-5 ">
                            <NavDropdown.Item as={Link} to="/licensing">Лицензирование</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/certification">Аттестация</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sro-membership">Вступление в СРО</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fire-audit">Пожарный аудит</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sout">СОУТ</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/risk-assessment">Расчет рисков</NavDropdown.Item>
                        </StyledNavDropdown>

                        <div className="d-flex flex-column justify-content-center align-items-center" style={{minWidth: "171px"}}>
                            <Nav.Link href="tel:+71234567890" className="p-0">+7 (123) 456-78-90</Nav.Link>
                            <Nav.Link href="mailto:akademia-profi@mail.ru" className="p-0">akademia-profi@mail.ru</Nav.Link>
                        </div>

                        <StyledButton className="px-3" onClick={handleClick}>Оставить заявку</StyledButton>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;