import React, { useState } from "react";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authActions } from "../../../redux/actions";
import { ClipLoader } from "react-spinners";

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    avatarUrl: currentUser.avatarUrl,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, avatarUrl } = formData;
    dispatch(authActions.updateProfile(name, avatarUrl));
    setEditable(false);
  };

  const handleCancel = () => {
    setEditable(false);
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        tags: ["socialIdiom", "userAvatar"],
      },
      function (error, result) {
        if (error) console.log(error);
        if (result && result.length && !error) {
          setFormData({
            ...formData,
            avatarUrl: result[0].secure_url,
          });
        }
      }
    );
  };

  return (
    <Container className="frame">
      <br />
      <div className="center">
        <Row>
          <Col className="d-flex justify-content-end align-items-start">
            <Button variant="danger" onClick={() => setEditable(true)}>
              <FontAwesomeIcon icon="edit" size="1x" /> Edit
            </Button>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <ClipLoader color="#f86c6b" size={150} loading={true} />
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <div className="text-center">
                    {formData.avatarUrl && (
                      <div className="mb-3">
                        <img
                          src={formData.avatarUrl}
                          className="avatar-lg"
                          alt="avatar"
                        />
                      </div>
                    )}
                    <Button
                      style={{ backgroundColor: " #047272" }}
                      onClick={uploadWidget}
                      disabled={!editable}
                    >
                      Edit avatar
                    </Button>
                  </div>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={!editable}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col>
                    <Form.Control
                      type="email"
                      required
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      disabled={true}
                    />
                  </Col>
                </Form.Group>
                <br />
                {editable && (
                  <ButtonGroup className="d-flex mb-3">
                    {loading ? (
                      <Button
                        className="mr-3"
                        variant="primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Submitting...
                      </Button>
                    ) : (
                      <Button className="mr-3" type="submit" variant="primary">
                        Submit
                      </Button>
                    )}
                    <Button
                      variant="light"
                      onClick={handleCancel}
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                  </ButtonGroup>
                )}
              </Form>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ProfilePage;
