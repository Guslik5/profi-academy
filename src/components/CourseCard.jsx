import React, { useState } from 'react';
import styled from "styled-components";
import Modal from './Modal'; // <-- проверь путь к файлу Modal.jsx

function CourseCard({ course }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const cardStyle = {
        borderRadius: '16px',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '320px',
        minHeight: '280px',
        transition: 'all 0.3s ease',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    };
    const hoverCardStyle = {
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        transform: 'translateY(-5px)',
    };
    const currentCardStyle = {
        ...cardStyle,
        ...(isHovered ? hoverCardStyle : {})
    };
    const categoryStyle = {
        fontSize: '0.7em',
        color: '#888',
        marginBottom: '10px',
        fontWeight: 'normal',
        textTransform: 'uppercase'
    };

    const titleStyle = {
        fontSize: '1em',
        fontWeight: '600',
        color: '#222',
        marginBottom: '20px',
        lineHeight: '1.4',
    };
    const detailsRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: '20px'
    };

    const detailItemStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
        color: '#333',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase'
    };

    const StyledButton = styled.button`
        background-color: #00C49F;
        color: #fff;
        padding: 12px 20px;
        border-radius: 50px;
        border: none;
        cursor: pointer;
        font-size: 1.05em;
        font-weight: bold;
        text-align: center;
        width: 100%;
        outline: none;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: #000;
        }
    `;

    const handleCardClick = () => {
        console.log('Клик по карточке:', course.NAME);
    };
    
    const handleButtonClick = (e) => {
        e.stopPropagation();
        setModalOpen(true);
    };
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
            course: course.NAME,
            cost: course.PRICE,
        };

        console.log('Отправляем заявку на сервер:', payload);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/add-lead', {
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


    return (
        <>
            <div
                style={currentCardStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardClick}
            >

                <p style={categoryStyle}>{course.type}</p>

                <h3 style={titleStyle}>{course.NAME}</h3>

                <div style={detailsRowStyle}>
                    <p style={detailItemStyle}>{course.PROPERTY_112?.value} ЧАСОВ</p>
                    <p style={detailItemStyle}>{course.PRICE} руб</p>
                </div>

                <StyledButton
                    onClick={handleButtonClick}
                >
                    получить консультацию
                </StyledButton>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={async (formData) => {
                    await handleFormSubmit(formData);
                    setModalOpen(false);
                }}
            />
        </>
    );
}

export default CourseCard;
