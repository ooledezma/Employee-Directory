import React from "react";
import "./Card.css";




function Card(props) {
 
  return (
        <tr>
          <th scope="row">
          <img src = {props.img} />
          </th>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
  );
 
}

export default Card;

