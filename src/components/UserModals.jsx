import React from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import UserTodos from "./UserTodos";
import UserPosts from "./UserPosts";
function UserModal({ show, onHide, user }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? user.name : "No User Selected"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              {user && <UserPosts id={user.id}></UserPosts>}
            </Col>
            <Col xs={6} md={6}>
              {user && <UserTodos id={user.id}></UserTodos>}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserModal;
