import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Hero.css";



function Hero(props) {
// console.log(props);
    return (

        // styling zoals BG en center zijn nog niet goed//

        <Jumbotron className="bg-transparent jumbotron-fluid p-0 JumboSaa">
            <Container fluid={true}>
                <Row classsName="justify-content-center py-5">
                    <Col md={12} sm={12}>
                        { props.title && <h1 className={`display-2 font-weight-bolder ${props.stylingClass}`}>{props.title}</h1> }
                        {/* { props.subTitle && <h3 className="display-4 font-weight-light slogon2" >{props.subTitle}</h3> } */}
                        { props.subTitle && <h3 className={`display-4 font-weight-light slogon2 slogon4`} >{props.subTitle}</h3> }
                        { props.text && <h3  className={`lead font-weight-light slogon3`} >{props.text}</h3> }
                    </Col>
                </Row>
            </Container>

        </Jumbotron>

    );



}

export default Hero;