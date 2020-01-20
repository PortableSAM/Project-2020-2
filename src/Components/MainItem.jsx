import React, { useState, useEffect } from "react";
import { Modal } from "reactstrap";
import { ItemInput } from "./ListIndex";
import firebase from "../Fire/Fire_Config";
import "./Style/MainItem.css";
import MainItemList from "./MainItemList";

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
            key: doc.id,
            ...doc.data()
          }));
          SetList(listItem);
          console.log(listItem);
        });
      } catch (error) {
        console.error("No such Data", error);
        alert("No scuh Data");
      }
    };
    return fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="main-title">
        <h2>Main Item page</h2>
      </div>
      <hr />
      <div className="main-table">
        <table className="table table-striped">
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
            <tbody>
              <MainItemList
                id={list.id}
                key={index}
                itemNm={list.항목}
                auth={list.등록자}
                date={new Date(list.createAt.seconds * 1000).toLocaleDateString(
                  "ko"
                )}
              />
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
          <button className="btn btn-outline-danger">항목 삭제</button>
        </div>
      </div>
    </div>
  );
}

export default MainItem;
