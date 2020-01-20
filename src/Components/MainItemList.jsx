import React from "react";
import { Link } from "react-router-dom";

function MainItemList({ itemNm, auth, date }) {
  return (
    <tr>
      <td>##</td>
      <td>
        <Link to="/detailItem/:id">{itemNm}</Link>
      </td>
      <td>{auth}</td>
      <td>{date}</td>
    </tr>
  );
}

export default MainItemList;
