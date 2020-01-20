import React, { useState, useEffect } from "react";
import { Modal } from "reactstrap";
import { ItemInput } from "./ListIndex";
import { Link } from "react-router-dom";
import firebase from "../Fire/Fire_Config";
import "./Style/MainItem.css";

function MainItem() {
  const [list, SetList] = useState([]);
  const [modal, setModal] = useState(false);
  const handleRegist = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchData = () => {
      const db = firebase.firestore();
      const dbRef = db.collection("Item").orderBy("createAt", "desc");
      try {
        dbRef.onSnapshot(snapshot => {
          const listItem = snapshot.docs.map(doc => ({
            id: doc.id,
            doc,
            ...doc.data()
          }));
          SetList(listItem);
        });
      } catch (error) {
        console.error("No such Data", error);
        alert("No scuh Data");
      }
    };
    return fetchData();
  }, []);

  console.log(list);
  return (
    <div className="main-container">
      <div className="main-title">
        <h2>Main Item page</h2>
      </div>
      <hr />
      <div className="main-table">
        <table className="table table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Item</th>
              <th>등록자</th>
              <th>등록일자</th>
              <th></th>
            </tr>
          </thead>
          {list.map((list, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link
                    to={`/detailItem/${list.id}/`}
                    style={{ color: "black", textDecoration: "none" }}
                    id={list.id}
                  >
                    {list.제품이름}
                  </Link>
                </td>
                <td style={{ textAlign: "center" }}>{list.등록자}</td>
                <td style={{ textAlign: "center" }}>
                  {new Date(list.createAt.seconds * 1000).toLocaleString("ko")}
                </td>
                <td style={{ textAlign: "center" }}></td>
              </tr>
            </tbody>
          ))}
        </table>
        <hr />
        <div className="main-btn">
          <button className="btn btn-outline-info" onClick={handleRegist}>
            항목 추가
          </button>
          <Modal isOpen={modal} toggle={handleRegist}>
            <ItemInput toggle={handleRegist} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default MainItem;
