import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const StyledLeftBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #f0f0f0;
    padding: 1.2rem;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 30px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
    margin-bottom: 3vw;
    align-items: flex-start;
    min-width: 350px;

`;

const RoundedNumber = styled.div`
    margin: 0.8vw 1.2vw;
    font-size: 2rem;
    border: 2px solid #00D4C1;
    padding: 2rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    color: #00D4C1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h3`
    margin-top: 4vw;
    font-weight: bold;
`

const Text = styled.p`
`


function LeftBlock({title, text, count, href}) {
    return (
        <StyledLeftBlock>
            <RoundedNumber>
                {count}
            </RoundedNumber>
            <Title className="fs-3">{title}</Title>
            <Text className="fs-4">{text}</Text>
            <div className="d-flex justify-content-end align-items-center"
                 style={{width: '96%', paddingBottom: "10px"}}>
                <Link to={href} className="text-black fw-bold text-center">Подробнее</Link>
            </div>
        </StyledLeftBlock>
    )
}

export default LeftBlock;
