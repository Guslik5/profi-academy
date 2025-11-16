import React from 'react';
import styled from 'styled-components';

// --- Импортируем все фоновые изображения ---
import bgImage from '../assets/bgSectionAdditionalCards.png';
import bgImage2 from '../assets/bgSectionAdditionalCards2.png';
import bgImage3 from '../assets/bgSectionAdditionalCards3.png';
import bgImage4 from '../assets/bgSectionAdditionalCards4.png';
// Убедитесь, что пути к вашим файлам правильные

// --- Styled Components ---

// Основной контейнер карточки
const CardWrapper = styled.div`
    /* Базовые стили для карточки */
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;


    flex-grow: 1;
    flex-shrink: 1;
    min-width: 150px;
    max-width: 280px;
    height: 180px;
    flex-basis: 100%; 
    
    @media (min-width: 200px) {
        flex-basis: calc(50% - 20px); 
    }

    @media (min-width: 1024px) {
        flex-basis: calc(25% - 30px); 
    }


    background-image: ${props => {
        switch (props.backgroundType) {
            case 'pattern1':
                return `url(${bgImage})`;
            case 'pattern2':
                return `url(${bgImage2})`; 
            case 'pattern3':
                return `url(${bgImage2})`; 
            case 'pattern4':
                return `url(${bgImage4})`; 
            default:
                return 'none'; 
        }
    }};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const TermLabel = styled.p`
    font-size: 14px;
    color: #333;
    margin: 0;
    z-index: 1;
`;

const DurationText = styled.h3`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 0;
    z-index: 1;
    display: flex;
`;

const SectionAdditionalCards = ({ term1, term2, backgroundType }) => {
    return (
        <CardWrapper backgroundType={backgroundType}>
            <DurationText>{term1}</DurationText>
            <TermLabel>{term2}</TermLabel>
        </CardWrapper>
    );
};

export default SectionAdditionalCards;
