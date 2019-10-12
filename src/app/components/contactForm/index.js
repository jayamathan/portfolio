import React from "react";
import "./contactForm.scss";

import { Col, Row } from "../layout";
import Input from "../input";
import Textarea from "../textarea";
import Button from "../button";
import { EMAIL_REGEX } from "../../constants";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      form: {
        msg: ""
      }
    };
  }

  changehandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      [name]: value,
      error: {}
    }));
  };

  submitHandler = () => {
    const { name, email, message, error, form } = this.state;
    if (form && form.state === "Pending") return;
    if (name.length < 3) {
      let e = Object.assign({}, error);
      e.name = true;
      e.msg = "Please enter at least 3 characters.";
      this.setState({ error: e });
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      let e = Object.assign({}, error);
      e.email = true;
      e.msg = "Please enter a valid email address.";
      this.setState({ error: e });
      return;
    }

    if (message.length < 20) {
      let e = Object.assign({}, error);
      e.message = true;
      e.msg = "Please enter at least 20 characters.";
      this.setState({ error: e });
      return;
    }
    this.setState({
      form: {
        msg: "",
        state: "Pending"
      }
    });
    fetch("http://imabhi.herokuapp.com/contact", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name, email: email, query: message })
    })
      .then(result => result.json())
      .then(result => {
        if (result.success) {
          this.setState({
            name: "",
            email: "",
            message: "",
            error: {},
            form: {
              msg: `Thanks "${name}", your message is successfully submitted! I will contact you as soon as possible.`,
              state: "Success"
            }
          });
        } else {
          this.setState({
            form: {
              msg: "OOPs!! Something went wrong.Please try again later.",
              state: "Error"
            }
          });
        }
      });
  };

  render() {
    const { name, email, message, error, form } = this.state;

    return (
      <React.Fragment>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Input
              id="name"
              label="Name"
              type="text"
              name="name"
              value={name}
              className=""
              onChange={this.changehandler}
              error={error}
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Input
              id="email"
              label="E-mail address"
              type="email"
              name="email"
              value={email}
              className=""
              onChange={this.changehandler}
              error={error}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Textarea
              id="message"
              label="Message"
              name="message"
              value={message}
              className=""
              onChange={this.changehandler}
              error={error}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="text-center">
            <Button label="Submit &#8594;" onClick={this.submitHandler} />
            <div className={form.state}>{form.msg}</div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ContactForm;
