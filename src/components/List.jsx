import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import UserModal from "./UserModals";

function UserList({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  return (
    <>
      <ListGroup>
        {data.map((user) => (
          <ListGroup.Item
            key={user.id}
            onClick={() => {
              setModalShow(true);
              setSelectedUser(user);
              console.log(user);
            }}
          >
            {user.id}. {user.name} - {user.email}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <UserModal show={modalShow} onHide={() => setModalShow(false)} user={selectedUser} />
    </>
  );
}

export default UserList;
