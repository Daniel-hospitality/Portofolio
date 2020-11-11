import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
// import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

//Eigen import//
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome, faEnvelope, faAddressCard, } from "@fortawesome/free-solid-svg-icons";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Daniel Hospitality",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/About" },
        { title: "Contact", path: "/Contact" },
        { title: "Test1", path: "/Test1" },
        { title: "Test2", path: "/Test2" },
      ],

      /////////Hero Jumbotron//////////////////
      home: {
        title: "BootCamp 2020",
        subTitle: "Web Dev AddOn TechGrounds ",
        text: "Check out below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
      test1: {
        title: "Test1",
      },
      test2: {
        title: "Test2",
      },
      //////////////////css start/////////////////////////////////
      heroStyling: {
        firstStyling: "slogon1",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          {/* <Navbar className="border-bottom" bg="transparent" expand="lg"> */}
          <Navbar className="color-headerBg" expand="lg">
            <Navbar.Brand href="/">
              <h3 className="color-logo slogon1">Daniel Hospitality</h3>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" arie-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="Link" to="/">
                  <FontAwesomeIcon icon={faHome} />&nbsp;Home
                </Link>
                <Link className="Link" to="/about">
                <FontAwesomeIcon icon={faAddressCard} />&nbsp;About
                </Link>
                <Link className="Link" to="/contact">
                  {/* <Link className="nav-link slogon2" to="/contact"> */}
                  <FontAwesomeIcon icon={faEnvelope} />&nbsp;Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
                /////////////////////////////css firstStyling is slogon1//////////////////////////////////////////////////
                stylingClass={this.state.heroStyling.firstStyling}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

           {/* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            reprehenderit voluptate, voluptatem enim laborum amet porro. Qui,
            vitae, illum fuga excepturi, libero corrupti veritatis vel et
            obcaecati ea error reiciendis.
          </p> */}
          
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
