import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Form,
} from "reactstrap";
import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type AuditQuestionnireSectionProps = {
  anh: object,
  vendorAuditId: object,
  survey: object,
  setSurvey: (values: object) => void,
  setSectionWillShowBack: (values: object) => void,
  methods: object,
  onSubmit: (values: object) => void,
  materials: object,
  viewMode: boolean,
};
const SignIn: FunctionComponent = (props: AuditQuestionnireSectionProps) => {
  const [formData, setFormData] = useState();
  const handleSubmit = (e) => {
      e.preventDefault();
    formData ? setValidateForm(true) : setValidateForm(false);
    const data = new FormData(e.target);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const [validateForm, setValidateForm] = useState(false);
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card body className="bg-secondary">
            <Card body className="mb-4">
              <p className="mb-3 text-center font-weight-bold">
                Enter your username and password to access your account
              </p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="exampleEmail">Usename</Label>
                  <Input
                    type="text"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter your username"
                    invalid={validateForm}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Enter your password"
                    invalid={validateForm}
                    onChange={handleChange}
                  />
                </FormGroup>
                <Button>Login</Button>
                <Link to="/sign-up"> or create account!</Link>
              </Form>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SignIn;
