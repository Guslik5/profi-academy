import React, {useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

import { isValidPhoneNumber } from 'libphonenumber-js'

const StyledContainer = styled(Container)`
    width: 90%;
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

function SectionConsultation({ id }) {
    const [name, setName] = useState("");

    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Проверка номера телефона
        if (!phone) {
            setPhoneError('Телефон обязателен для заполнения.');
            return;
        }

        if (!isValidPhoneNumber(phone, 'RU')) {
            setPhoneError('Неверный формат номера телефона.');
            return;
        }

        setPhoneError('');

        // Проверка электронной почты
        if (email && !emailRegex.test(email)) {
            setEmailError('Неверный формат электронной почты.');
            return;
        }

        setEmailError('');

        // Создаем объект с данными формы
        const formData = {
            name: name,  // Предполагается, что переменная name уже определена в вашем коде
            phone: phone,
            email: email,
        };

        // Отправляем данные на сервер
        try {
            await handleFormSubmit(formData);
            // Очистка полей после успешной отправки
            setName('');
            setEmail('');
            setPhone('');
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            // Здесь можно обработать ошибку, например, показать уведомление пользователю
        }
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
// Ваша функция для отправки данных на сервер
    const handleFormSubmit = async (formData) => {
        const { lastname, name: firstName, secondname } = parseFullName(formData.name);

        const payload = {
            lastname: lastname,
            name: firstName,
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
                throw new Error(`Ошибка HTTP! статус: ${response.status}`);
            }

            const result = await response.json();
            console.log('Лид успешно добавлен:', result);

        } catch (error) {
            console.error('Произошла ошибка сети или сервера:', error);
            throw error;
        }
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
        <StyledContainer id={id}>
            <Row>
                <Col md={6}>
                    <Row className="d-flex justify-content-center align-items-center text-center fw-bold text-white fs-3 mb-5">
                        Получите бесплатную <br/> консультацию
                    </Row>
                    <Row className="d-flex justify-content-center align-content-center text-center text-white fs-5 mt-5">
                        Разберем вашу ситуацию и предложим оптимальный путь развития в интересующей вас сфере.
                    </Row>
                </Col>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name" className="mb-3 mt-3">
                            <StyledFormControl
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="ФИО"
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
                                placeholder="Почта (не обязательно)"
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