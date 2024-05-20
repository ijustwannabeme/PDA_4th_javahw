import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import UserList from "./List";
import UserModal from "./Modal";
export default function UserApp() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>
        <b>Users</b>
      </h1>
      <UserList data={userData}></UserList>
    </div>
  );
}
