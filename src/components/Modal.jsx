import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

function UserModal({ show, onHide, user }) {
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{user.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <h1>Post</h1>
            </Col>
            <Col xs={6} md={6}>
              <h1>Todos</h1>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default UserModal;
