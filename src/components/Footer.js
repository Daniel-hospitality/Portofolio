import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressCard, } from "@fortawesome/free-solid-svg-icons";





function Footer() {

    return (
        <footer className="mt-0 color-headerBg">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 Link" md={3} sm={12}>
                        Daniel Hospitality
                    </Col>
                        <Router>
                                {/* <Link to="/about/">About</Link> */}
                                <Link className="p-0 Link" to="../about">
                                <FontAwesomeIcon icon={faAddressCard} />&nbsp;About</Link>
                                <a className="p-0 Link" href="/">Terms</a>
                                <a className="p-0 Link" href="/">Privacy</a>
                                {/* <Route path="/sitemap/" component={SitemapPage} /> */}
                        </Router>
                    <Col className="p-0 d-flex justify-content-end Link" md={3}> This site was made by Daniel M.
                    </Col>    


                </Row>
            </Container>
        </footer>

    );


}

export default Footer;