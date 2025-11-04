// SearchInputBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Расстояние между полем ввода и кнопкой */
  margin-bottom: 30px; /* Отступ снизу, чтобы не прилипать к следующему элементу */
  width: 100%; /* Ширина контейнера */
  max-width: 800px; /* Максимальная ширина, чтобы не растягивался слишком сильно */
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px; /* Небольшой горизонтальный паддинг */
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  flex-grow: 1; /* Поле ввода будет занимать всё доступное пространство */
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 25px; /* Большой радиус для закругленных углов */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Легкая тень снизу */
  padding: 8px 20px;
  height: 50px; /* Фиксированная высота */
  box-sizing: border-box; /* Учитываем padding и border в height */
`;

const SearchIcon = styled.span`
  font-size: 20px;
  color: #888;
  margin-right: 10px;
  /* Можно использовать SVG иконку вместо unicode символа для лучшего контроля */
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
  padding: 0;
  background: transparent;

  &::placeholder {
    color: #a0a0a0;
  }
`;

const SearchButton = styled.button`
  background-color: #00a880; /* Зеленый цвет кнопки */
  color: #fff;
  border: none;
  border-radius: 25px; /* Большой радиус для закругленных углов */
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  height: 50px; /* Фиксированная высота, как у поля ввода */
  box-sizing: border-box; /* Учитываем padding и border в height */
  
  &:hover {
    background-color: #008f6b;
  }

  &:active {
    background-color: #007254;
  }
`;

// React Component
function SearchInputBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <SearchBarContainer>
            <InputWrapper>
                {/* Использование unicode символа для лупы. Для продакшн можно заменить на SVG или иконку из библиотеки */}
                <SearchIcon>🔍</SearchIcon>
                <SearchInput
                    type="text"
                    placeholder="Поиск"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
            </InputWrapper>
            <SearchButton onClick={handleSearchClick}>Поиск</SearchButton>
        </SearchBarContainer>
    );
}

export default SearchInputBar;
