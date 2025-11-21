import React, {useEffect, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logoForHeader.png'
import styled, {css} from 'styled-components';
import AccessibilityButton from "./AccessibilityButton.jsx";
import Modal from "./Modal.jsx";
import {FiSearch, FiX} from "react-icons/fi";

const HeaderWrap = styled.header`
    display: flex;
    align-items: center;
    padding: 12px 20px;
    background: #fff;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    position: relative;
    z-index: 10;
`;

const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    min-width: 0;
`;

const SearchWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    position: absolute;
    left: 36px;
    width: 0;
    opacity: 0;
    transform-origin: left center;
    padding: 8px 12px;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    transition: width 280ms cubic-bezier(.2, .9, .3, 1), opacity 200ms;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    outline: none;
    font-size: 14px;
    background: #fff;

    ${props => props.open && css`
        width: 280px;
        opacity: 1;
    `} @media (
    max-width: 560px) {
    ${props => props.open && css`
        width: 180px;
    `}
}
`;

const CloseBtn = styled.button`
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    padding: 4px;
    display: ${props => props.show ? "block" : "none"};
    cursor: pointer;
`;

const RightGroup = styled.div`
    width: 72vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 28px;
    transition: transform 320ms cubic-bezier(.2, .9, .3, 1), opacity 220ms;
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
    white-space: nowrap;


    ${props => props.hidden && css`
        transform: translateX(110%);
        opacity: 0;
        pointer-events: none;
    `} will-change: transform, opacity;
`;

const NavItem = styled.div`
    color: #333;
    font-size: 15px;
`;

const Contact = styled.div`
    color: #666;
    font-size: 13px;
    text-align: right;
`;

const CTA = styled.button`
    background: #00a79d;
    color: #fff;
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;


const StyledNavbar = styled(Navbar)`
    display: flex;
    justify-content: space-between;
    background-color: white;
    transition: all 0.3s ease;
    box-shadow: none;
    position: relative;
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
            background-color: #00776B !important;;
            border-color: #00776B !important;;
            box-shadow: none !important;;
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

    &:active {
        background-color: #00554B !important;;
        border-color: #00554B !important;;
        box-shadow: none !important;;
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
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);
    const wrapRef = useRef(null);

    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [open]);

    useEffect(() => {
        function onDocClick(e) {
            if (!wrapRef.current) return;
            if (!wrapRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }

        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

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

        return {lastname, name, secondname};
    };

    const handleFormSubmit = async (formData) => {
        const {lastname, name, secondname} = parseFullName(formData.name);

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

                const errorData = await response.json().catch(() => ({message: 'Ошибка сервера'}));
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
        <div>
            <StyledNavbar expand="lg"
                          className={`${isFixed ? 'fixed' : ''} ${isHidden ? 'hidden' : ''} bg-body-tertiary px-4 py-0`}
                          style={{borderBottom: "1px solid #9E9E9E"}}>
                <LeftGroup>
                    <Navbar.Brand as={Link} to="/" style={{marginRight: '5vw'}}>
                        <StyledImg
                            src={logo}
                            alt="Логотип"
                            className="d-flex mx-auto"
                        />
                        <div style={{fontSize: "12px"}}>АКАДЕМИЯ ПРОФИ</div>
                    </Navbar.Brand>

                    <SearchWrap>
                        <button
                            aria-expanded={open}
                            aria-label={open ? "Закрыть поиск" : "Открыть поиск"}
                            onClick={() => setOpen(v => !v)}
                            style={{
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                                padding: 10,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            {open ? <FiX size={18}/> : <FiSearch size={18}/>}
                        </button>

                        <SearchInput
                            ref={inputRef}
                            open={open}
                            placeholder="Поиск по сайту..."
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    console.log("search:", e.currentTarget.value);
                                }
                            }}
                        />

                    </SearchWrap>
                </LeftGroup>

                <RightGroup hidden={open}>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex justify-content-between w-100">

                            <StyledNavDropdown title="О нас" id="about"
                                               className="d-flex flex-column justify-content-center align-items-center fs-5">
                                {/*<NavDropdown.Item as={Link} to="/ourMission">Наша миссия</NavDropdown.Item>*/}
                                <NavDropdown.Item className="fs-5" as={Link}
                                                  to="/documents">Документы</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5"
                                                  onClick={scrollToSection('contacts')}>Контакты</NavDropdown.Item>
                            </StyledNavDropdown>

                            <StyledNavDropdown title="Обучение" id="study"
                                               className="d-flex flex-column justify-content-center align-items-center fs-5 ">
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/92">Рабочие
                                    профессии</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/96">Повышение
                                    квалификации</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/94">Профессиональная
                                    переподготовка</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/1">Пожарная
                                    безопасность</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/98">Охрана
                                    труда</NavDropdown.Item>
                            </StyledNavDropdown>

                            <StyledNavDropdown title="Консалтинг" id="consulting"
                                               className="d-flex flex-column justify-content-center align-items-center fs-5 ">
                                <NavDropdown.Item className="fs-5" as={Link}
                                                  to="/courses/100">Лицензирование</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/102">Аттестация
                                    специалистов</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/104">Вступление в
                                    НРС</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/106">Вступление в
                                    СРО</NavDropdown.Item>
                                <NavDropdown.Item className="fs-5" as={Link} to="/courses/170">СОУТ и расчет
                                    рисков</NavDropdown.Item>
                                {/*<NavDropdown.Item as={Link} to="/courses/Расчет рисков">Расчет рисков</NavDropdown.Item>*/}
                            </StyledNavDropdown>

                            <div className="d-flex flex-column justify-content-center align-items-center"
                                 style={{minWidth: "171px"}}>
                                <Nav.Link href="tel:+78006006330" className="p-0"> 8 (800) 600-63-30</Nav.Link>
                                <Nav.Link href="tel:+79675202425" className="p-0"> 8 (967) 520-24-25</Nav.Link>
                                <Nav.Link href="mailto:info@akademiaprofi.ru"
                                          className="p-0">info@akademiaprofi.ru</Nav.Link>
                            </div>

                            <StyledButton className="px-3" onClick={handleOpenModal}>Оставить заявку</StyledButton>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                </RightGroup>
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