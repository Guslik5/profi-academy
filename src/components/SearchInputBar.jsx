import React, {useState} from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 15px;
    box-sizing: border-box;
`;

const InputWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 8px 20px;
    height: 50px;
    box-sizing: border-box;
`;

const SearchIcon = styled.span`
    font-size: 20px;
    color: #888;
    margin-right: 10px;
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
    background-color: #00a880;
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 10px 30px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    height: 50px;
    box-sizing: border-box;

    &:hover {
        background-color: #008f6b;
    }

    &:active {
        background-color: #007254;
    }
`;

function SearchInputBar({onSearch}) {
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
