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
const SignUp: FunctionComponent = (props: AuditQuestionnireSectionProps) => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card body className="bg-secondary">
            <Card body className="mb-4">
              <p className="mb-3 text-center font-weight-bold">
                Welcome to PDA website. Please create an account or
                <Link to="/sign-in"> login</Link>
              </p>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter your name"
                  />
                </FormGroup>{" "}
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Usename</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter your username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Enter your password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Confirm Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Enter your password"
                  />
                </FormGroup>
                <Button>Create Account</Button>
              </Form>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
