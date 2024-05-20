import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserTodos({ id }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then((response) => {
          console.log(response);
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  return (
    <>
      <h1>
        <b>Todos</b>
      </h1>
      <br></br>
      <ul>
        {userData.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
