import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import LeftBlock from "./DirectionsComp/LeftBlock.jsx";
import RightBlock from "./DirectionsComp/RightBlock.jsx";


const LeftCol = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RightCol = styled(Col)`
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  /*  Важно: позиционирование sticky */
  position: sticky;
  top: 20px; /*  Отступ от верха экрана (настройте по желанию) */
  height: fit-content;  /* Изменяем height */
  align-self: flex-start; /* Выравниваем по верху */
  @media (max-width: 991px) {
    margin-left: 0;
    position: static;  /* Отключаем sticky на мобильных устройствах */
  }
`;

function SectionDirections( {rigthBlock, leftBlocks, reverse} ) {
    return (
        <Container>
            <Row>
                {reverse ? ( // Используем тернарный оператор для условного рендеринга
                    <>
                        {/* Если reverse === true, рендерим RightCol перед LeftCol */}
                        <RightCol ml={6}>
                            <RightBlock title={rigthBlock.title} text={rigthBlock.text} reverse={reverse}/>
                        </RightCol>
                        <LeftCol ml={6}>
                            {leftBlocks.map((block, index) => (
                                <LeftBlock
                                    key={index}
                                    title={block.title}
                                    text={block.text}
                                    count={block.count}
                                />
                            ))}
                        </LeftCol>
                    </>
                ) : (
                    <>
                        {/* Если reverse === false (или не указан), рендерим LeftCol перед RightCol */}
                        <LeftCol ml={6}>
                            {leftBlocks.map((block, index) => (
                                <LeftBlock
                                    key={index}
                                    title={block.title}
                                    text={block.text}
                                    count={block.count}
                                />
                            ))}
                        </LeftCol>
                        <RightCol ml={6}>
                            <RightBlock title={rigthBlock.title} text={rigthBlock.text} reverse={reverse} />
                        </RightCol>
                    </>
                )}
            </Row>
        </Container>
    );
}

export default SectionDirections;