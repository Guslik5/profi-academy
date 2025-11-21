import React from "react";
import styled, {css} from "styled-components";

const StyledRightBlock = styled.div`
    background-color: black;
    color: white;
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.7rem 0.7rem 0.7rem 4.5rem;
    min-width: 350px;

    border-radius: 30px;
    clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);
    margin-bottom: 30px;


    @media (max-width: 991px) {
        clip-path: polygon(50% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%);
    }

    ${props =>
            props.reverse &&
            css`
                padding-right: 4.4rem;
                clip-path: polygon(90% 0%, 0% 0%, 0% 100%, 90% 100%, 100% 50%);
                @media (max-width: 991px) {
                    clip-path: polygon(50% 100%, 100% 87%, 100% 0%, 0% 0%, 0% 87%);
                }
            `}
`;

const Title = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    margin: 3rem auto 3rem;
    width: fit-content;
    font-size: 1.6em;
`;

const Text = styled.p`
    margin: 1.5vw 4vw 3vw 4vw;
`;

function RightBlock({title, text, reverse}) {
    return (
        <StyledRightBlock className="text-white" reverse={reverse}>
            <Title>{title}</Title>
            <Text className="fs-4">{text}</Text>
        </StyledRightBlock>
    );
}

export default RightBlock;