import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Homepage";
import LoginPage from "../LoginPage";
import PublicNavbar from "../PublicNavbar";
import RegisterPage from "../RegisterPage";
import { Container } from "react-bootstrap";
import AlertMsg from "./AlertMsg";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container>
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
