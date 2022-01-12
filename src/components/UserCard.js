import React from "react";
import { Card , Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  return (
    <div>
      <Card style={{ width: "18rem",margin:"10px"}}>
       <h1 className="user">{user.name[0]}{user.name[1]}</h1>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
        <h4>{user.username}</h4>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
          <Link to={`/${user.id}`}><Button variant="dark">See Details</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
