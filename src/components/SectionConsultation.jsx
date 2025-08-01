import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

import { isValidPhoneNumber } from 'libphonenumber-js'

const StyledContainer = styled(Container)`
    border-radius: 30px;
    background-color: #00D4C1;
    padding: 3rem;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
    margin-bottom: 5rem;
`

const StyledFormControl = styled(Form.Control)`
    &:focus {
        border-color: black; // Цвет рамки при фокусе
        box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25); // Цвет тени при фокусе
    }
`;

const StyledButton = styled(Button)`
    background-color: #00514A;
    border: 1px solid #00514A;
    border-radius: 9px;
    color: white;

    &:hover {
        box-shadow: none;
        background-color: #00423C;
        border-color: #00423C;
    }

    /* Смена цвета при клике */
    &:active {
        background-color: #003A34  !important;; /* Более темный оттенок при клике */
        border-color: #003A34  !important;;
        box-shadow: none  !important;; /* Убираем тень при клике */
    }
`;

function SectionConsultation() {
    const [name, setName] = useState("");

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleSubmit = (event) => {
        event.preventDefault();

        if (!phone) {
            setPhoneError('Телефон обязателен для заполнения.');
            return;
        }

        if (!isValidPhoneNumber(phone, 'RU')) {
            setPhoneError('Неверный формат номера телефона.');
            return;
        }

        setPhoneError('');

        if (email && !emailRegex.test(email)) {
            setEmailError('Неверный формат электронной почты.');
            return;
        }

        setEmailError('');

        setName('');
        setEmail('');
        setPhone('');
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);

        if (!value) {
            setPhoneError('Телефон обязателен для заполнения.');
        } else if (!isValidPhoneNumber(value, 'RU')) {
            setPhoneError('Неверный формат номера телефона.');
        } else {
            setPhoneError('');
        }
    };


    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value && !emailRegex.test(value)) {
            setEmailError('Неверный формат электронной почты.');
        } else {
            setEmailError('');
        }
    };


    return(
        <StyledContainer>
            <Row>
                <Col md={6}>
                    <Row className="d-flex justify-content-center align-items-center text-center fw-bold text-white fs-3 mb-5">
                        Получите бесплатную <br/> консультацию
                    </Row>
                    <Row className="d-flex justify-content-center align-content-center text-center text-white fs-5 mt-5">
                        Ваш текст(Ut enim ad minim veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti repellat.)
                    </Row>
                </Col>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name" className="mb-3 mt-3">
                            <StyledFormControl
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Имя"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone" className="mb-3">
                            <StyledFormControl
                                type="tel"
                                placeholder="Номер телефона"
                                value={phone}
                                onChange={handlePhoneChange}
                                isInvalid={!!phoneError}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {phoneError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mb-3">
                            <StyledFormControl
                                type="email"
                                placeholder="Почта"
                                value={email}
                                onChange={handleEmailChange}
                                isInvalid={!!emailError}
                            />
                            <Form.Control.Feedback type="invalid">
                                {emailError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <StyledButton type="submit" className="w-100">Получить консультацию</StyledButton>
                        <div className="mt-3 text-white" style={{fontSize: "0.6rem"}}>
                            Нажимая на кнопку "Получить консультацию" я даю согласие на обработку персональных данных
                        </div>
                    </Form>
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default SectionConsultation;