import React from "react";
import { Link } from "react-router-dom";
import firebase from "../Fire/Fire_Config";

const View = ({ id, type, itemNm, date, registor }) => {
  const handleDel = () => {
    const db = firebase.firestore();
    try {
      const dbRef = db.collection("Item").doc(id);
      dbRef.delete();
      console.log("Delete success");
      alert("Delete success");
    } catch (error) {
      console.error("Delete Failed", error);
      alert("Delete Failed");
    }
  };
  console.log(id);
  return (
    <tbody>
      <tr>
        <th scope="row">{type}</th>
        <td>
          <Link
            id={id}
            to={`/detailItem/${id}`}
            style={{ color: "black", textDecoration: "none" }}
          >
            {itemNm}
          </Link>
        </td>
        <td>{registor}</td>
        <td>{date}</td>
        <td>
          <button className="btn btn-outline-danger" onClick={handleDel}>
            Delete
          </button>
          {/*<Delete id={id} />*/}
        </td>
      </tr>
    </tbody>
  );
};

export default View;
