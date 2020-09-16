import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Homepage";
import LoginPage from "../LoginPage";
import PublicNavbar from "../PublicNavbar";
import AddDetailPage from "../AddDetailPage";
import RegisterPage from "../RegisterPage";
import BlogDetailPage from "../BlogDetailPage";
import { Container } from "react-bootstrap";
import AlertMsg from "./AlertMsg";
import PrivateRoute from "../Routes/PrivateRoute";
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
          <PrivateRoute exact path="/blogs/add" component={AddDetailPage} />
          <PrivateRoute exact path="/blogs/:id" component={BlogDetailPage} />
          <Route path="" component={FourOhFour} />
        </Switch>
      </Container>
    </>
  );
};
const FourOhFour = () => <h1>404 not found</h1>;

export default PublicLayout;
