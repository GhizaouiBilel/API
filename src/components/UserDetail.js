import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoad(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  if (load) return <Spinner animation="border" variant="secondary" />;
  return (
    <div>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <h1 className="user">
          {user.name[0]}
          {user.name[1]}
        </h1>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <h4>User Name: {user.username}</h4>
          <p>Email: {user.email}</p>
          <p>Adress: {user.address.street}</p>
          <Link to="/">
            <Button variant="dark">Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetail;
