import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logoFavikon.png'
import searchIcon from '../assets/searchIcon.png'
import styled from 'styled-components';
import AccessibilityButton from "./AccessibilityButton.jsx";
import Modal from "./Modal.jsx";

const StyledNavbar = styled(Navbar)`
background-color: white;
transition: all 0.3s ease;
box-shadow: none;
position: relative; /* Начальная позиция */
    z-index: 100;

&.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

&.hidden {
    transform: translateY(-100%);
}
`;

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

const StyledImg = styled.img`
    height: 65px;
    @media (max-width: 768px) {
        height: 45px;
    }
`





function Header() {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleModalClose = () => {
        setModalOpen(false);
    };

    const parseFullName = (fullName) => {
        const parts = fullName.trim().split(/\s+/).filter(p => p.length > 0);
        let name = '';
        let lastname = '';
        let secondname = '';
        if (parts.length >= 1) {
            lastname = parts[0];
        }
        if (parts.length >= 2) {
            name = parts[1];
        }
        if (parts.length >= 3) {
            secondname = parts[2];
        }

        return { lastname, name, secondname };
    };

    const handleFormSubmit = async (formData) => {
        const { lastname, name, secondname } = parseFullName(formData.name);

        const payload = {
            lastname: lastname,
            name: name,
            secondname: secondname,
            phone: formData.phone,
            email: formData.email || "",
            course: " ",
            cost: "0",
        };

        console.log('Отправляем заявку на сервер:', payload);

        try {
            const response = await fetch('https://akademia-profi.ru/api/add-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {

                const errorData = await response.json().catch(() => ({ message: 'Ошибка сервера' }));
                console.error('Ошибка при отправке лида:', errorData);
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Лид успешно добавлен:', result);

        } catch (error) {
            console.error('Произошла ошибка сети или сервера:', error);
            throw error;
        }
    };
    
    


    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const scrollToSection = (targetId) => (e) => {
        e.preventDefault();
        navigate('/')
        
        setTimeout(() => {
            const scrollToNews = (sectionId) => {
                const newsSection = document.getElementById(sectionId);
                console.log(newsSection)
                if (newsSection) {
                    const rect = newsSection.getBoundingClientRect();
                    const absoluteTop = rect.top + window.pageYOffset;
                    const scrollTarget = absoluteTop - 100;

                    window.scrollTo({
                        top: scrollTarget,
                        behavior: 'smooth',
                    });
                } else {
                    console.warn("News section not found!");
                }
            };

            scrollToNews(targetId);
        }, 300);
    };

    const [isFixed, setIsFixed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    let lastScrollY = 0;

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }

        if (scrollY > lastScrollY) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }

        lastScrollY = scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div >
        <StyledNavbar expand="lg" className={`${isFixed ? 'fixed' : ''} ${isHidden ? 'hidden' : ''} bg-body-tertiary px-4 py-0`} style={{borderBottom: "1px solid #9E9E9E"}} >
                <Navbar.Brand as={Link} to="/" style={{marginRight: '5vw'}}>
                    <StyledImg
                        src={logo}
                        alt="Логотип"
                        className="d-flex mx-auto"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-between w-100">
                        <Nav.Item className="d-flex justify-content-center align-items-center fs-4 ">
                            <img src={searchIcon} alt="Лупа" />

                        </Nav.Item>
                        <StyledNavDropdown title="О нас" id="about" className="d-flex flex-column justify-content-center align-items-center fs-5">
                            {/*<NavDropdown.Item as={Link} to="/ourMission">Наша миссия</NavDropdown.Item>*/}
                            <NavDropdown.Item as={Link} to="/documents">Документы</NavDropdown.Item>
                            <NavDropdown.Item onClick={scrollToSection('contacts')}>Контакты</NavDropdown.Item>
                        </StyledNavDropdown>

                        <StyledNavDropdown title="Обучение" id="study" className="d-flex flex-column justify-content-center align-items-center fs-5 ">
                            <NavDropdown.Item as={Link} to="/courses/92">Рабочие профессии</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/96">Повышение квалификации</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/94">Профессиональная переподготовка</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/1">Пожарная безопасность</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/98">Охрана труда</NavDropdown.Item>
                        </StyledNavDropdown>

                        <StyledNavDropdown title="Консалтинг" id="consulting" className="d-flex flex-column justify-content-center align-items-center fs-5 ">
                            <NavDropdown.Item as={Link} to="/courses/100">Лицензирование</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/102">Аттестация специалистов</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/104">Вступление в НРС</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/106">Вступление в СРО</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/courses/1">СОУТ и расчет рисков</NavDropdown.Item>
                            {/*<NavDropdown.Item as={Link} to="/courses/Расчет рисков">Расчет рисков</NavDropdown.Item>*/}
                        </StyledNavDropdown>

                        <div className="d-flex flex-column justify-content-center align-items-center" style={{minWidth: "171px"}}>
                            <Nav.Link href="tel:+78006006330" className="p-0"> 8 (800) 600-63-30</Nav.Link>
                            <Nav.Link href="mailto:info@akademiaprofi.ru" className="p-0">info@akademiaprofi.ru</Nav.Link>
                        </div>

                        <StyledButton className="px-3" onClick={handleOpenModal}>Оставить заявку</StyledButton>
                    </Nav>
                </Navbar.Collapse>
            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={async (formData) => {
                    await handleFormSubmit(formData);
                    setModalOpen(false);
                }}
            />
        </StyledNavbar>
        </div>
    );
}

export default Header;