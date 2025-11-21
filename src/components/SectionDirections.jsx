import React from "react";
import {Col, Container, Row} from "react-bootstrap";
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
    position: sticky;
    top: 140px;
    height: fit-content;
    align-self: flex-start;
    @media (max-width: 991px) {
        margin-left: 0;
        position: static;
    }
`;

function SectionDirections({rigthBlock, leftBlocks, reverse}) {
    return (
        <Container>
            <Row>
                {reverse ? (
                    <>
                        {}
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
                                    href={block.href}
                                />
                            ))}
                        </LeftCol>
                    </>
                ) : (
                    <>
                        {}
                        <LeftCol ml={6}>
                            {leftBlocks.map((block, index) => (
                                <LeftBlock
                                    key={index}
                                    title={block.title}
                                    text={block.text}
                                    count={block.count}
                                    href={block.href}
                                />
                            ))}
                        </LeftCol>
                        <RightCol ml={6}>
                            <RightBlock title={rigthBlock.title} text={rigthBlock.text} reverse={reverse}/>
                        </RightCol>
                    </>
                )}
            </Row>
        </Container>
    );
}

export default SectionDirections;