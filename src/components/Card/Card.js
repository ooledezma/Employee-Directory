import React from "react";
import "./Card.css";




function Card(props) {

  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }
 
  return (
        <tr>
          <th scope="row">
          <img src = {props.img} />
          </th>
          <td>{props.first}</td>
          <td>{props.last}</td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{formatDate(props.dob)}</td>
        </tr>
  );
 
}

export default Card;

