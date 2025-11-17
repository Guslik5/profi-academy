import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

const ModalContent = styled.div`
    background: linear-gradient(to bottom right, #000000, #006E64);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 450px;
    position: relative;
    animation: slideIn 0.3s ease-out;
    box-sizing: border-box;

    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px; 
    background: none;
    border: none;
    font-size: 32px;
    cursor: pointer;
    color: white; 
    transition: color 0.2s ease;
    font-family: 'Arial', sans-serif;
    font-weight: bold;

    &:hover {
        color: #f00; 
    }
`;

const FormTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    color: white;
    text-align: left;
    font-size: 28px;
    line-height: 1.2;
    font-weight: bold;
`;

const FormGroup = styled.div`
    margin-bottom: 15px; 
`;

const Input = styled.input`
    width: 100%;
    padding: 15px; /* Увеличенный padding для высоты поля */
    border: none;
    border-radius: 8px; /* Скругленные углы полей ввода */
    font-size: 16px;
    box-sizing: border-box;
    background: white;
    color: #333;

    &::placeholder {
        color: #a0a0a0; /* Более светлый серый плейсхолдер */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #5cb85c; /* Зеленая обводка при фокусе, если нужна */
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 15px 20px;
    background-color: #000; /* Черный фон кнопки */
    color: white;
    border: none;
    border-radius: 8px; /* Скругленные углы кнопки */
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 25px; /* Отступ сверху от кнопки */

    &:hover {
        background-color: #333;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

const DisclaimerText = styled.p`
    font-size: 13px; /* Чуть крупнее */
    color: rgba(255, 255, 255, 0.8); /* Полупрозрачный белый */
    margin-top: 15px;
    text-align: left;
    line-height: 1.4;
`;

const ErrorMessage = styled.p`
    color: #ffdddd; /* Светло-красный текст ошибки на темном фоне */
    font-size: 14px;
    margin-top: 5px;
`;


// --- Modal Component ---

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setName('');
            setPhone('');
            setEmail('');
            setErrors({});
            setIsSubmitting(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const validate = () => {
        let newErrors = {};
        if (!name.trim()) {
            newErrors.name = 'Имя обязательно';
        }
        if (!phone.trim()) {
            newErrors.phone = 'Телефон обязателен';
        } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(phone)) {
            newErrors.phone = 'Некорректный номер телефона';
        }
        if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Некорректный Email';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        setIsSubmitting(true);
        try {
            await onSubmit({ name, phone, email });
        } catch (error) {
            console.error("Ошибка при отправке формы через Modal:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <FormTitle>
                    Запишитесь на бесплатную<br />консультацию
                </FormTitle>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="ФИО"
                            required
                        />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Номер телефона"
                            required
                        />
                        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Почта"
                        />
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </FormGroup>

                    <SubmitButton type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
                    </SubmitButton>

                    <DisclaimerText>
                        Нажимая на кнопку Получить консультацию даю согласие на обработку персональных данных
                    </DisclaimerText>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
