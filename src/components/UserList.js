import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(true)
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {setUsers(json);setLoad(false)})
      .catch((err) => console.log(err));
  }, [])
  if(load)
  return <Spinner animation="border" variant="primary" />
  return (
    <div className="container">
      <div className="d-flex justify-content-around flex-wrap">
        {users.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
