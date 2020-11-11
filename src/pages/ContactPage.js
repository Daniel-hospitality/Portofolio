import React from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";
import "./HacPage.css";



class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (Event) => {
    // console.log(Event);

    const target = Event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  //No Page Refresh no dubbel sent email  emailSent: true/false //
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });

    //    Axios.post('/api/email', this.state)
    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div className="ContactPage">
        <Hero stylingClass="slogon1" title={this.props.title} />
        <Content>
          <div class="FormText1">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                
                
                <Form.Label className="Link" htmlFor="full-name">Full Name</Form.Label>
                <Form.Control
                  id="full-name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="Link" htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="Link" htmlFor="message">Message</Form.Label>
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  rows="8"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                className="primary ContH"
                variant="ContH"
                type="submit"
                disabled={this.state.disabled}
              >
                Send
              </Button>

              {this.state.emailSent === true && (
                <p className="d-inline success-msg">Email Sent</p>
              )}
              {this.state.emailSent === false && (
                <p className="d-inline err-msg">Email Not Sent</p>
              )}
            </Form>
          </div>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
