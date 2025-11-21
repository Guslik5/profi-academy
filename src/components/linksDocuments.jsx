import React from 'react';
import Documents from "../pages/Documents.jsx";
import {Container} from "react-bootstrap";


function linksDocuments({links}) {
    return (
        <>
            <Container className="mb-5">
                {
                    links.map((link, index) => {
                        const key = Object.keys(link)[0];
                        const value = link[key];
                        return (
                            <div key={index} className="my-2">
                                <a href={value} target="_blank" rel="noopener noreferrer" className="text-black">
                                    {key}
                                </a>
                            </div>
                        )
                    })
                }
            </Container>
        </>
    )
}

export default linksDocuments;