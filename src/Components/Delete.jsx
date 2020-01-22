import React from "react";
import firebase from "../Fire/Fire_Config";

const Delete = props => {
  const id = props.id;
  console.log(id);
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
  return (
    <button className="btn btn-outline-danger" onClick={handleDel}>
      Delete
    </button>
  );
};
export default Delete;
