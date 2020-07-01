import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = (props) => {
  return (
    <>
      <Modal show={props.show} size="lg" onHide={props.handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          Are you Sure Want to Delete Todo Task{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={props.deleteTask}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
