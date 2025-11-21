import React, {useEffect} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import SliderDocumentsWithOfficialPortal from "../components/SliderDocumentsWithOfficialPortal.jsx";
import LinksDocuments from "../components/linksDocuments.jsx";
import Footer from "../components/Footer.jsx";

function Documents() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const links = [
        {
            "Устав ООО Академия Профи": "https://cloud.mail.ru/public/1Rga/RJUJN7MKn"
        },
        {
            "Положение ДОТ": "https://cloud.mail.ru/public/w9of/Uy1uSekdP",
        },
        {
            "Порядок оказания учебно методической помощи обучающимся": "https://cloud.mail.ru/public/aJUa/jdjifVba4",
        },
    ];

    return (
        <>
            <Container className=" my-5 px-5 fw-me fs-1">
                Документы
            </Container>
            <SliderDocumentsWithOfficialPortal/>
            <LinksDocuments links={links}/>
        </>
    );
}

export default Documents;