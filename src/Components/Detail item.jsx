import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../Fire/Fire_Config";
import "./Style/DetailItem.css";

function DetailItem(props) {
  const detailId = props.match.params.id;
  console.log(detailId);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const db = firebase.firestore();
      const dbRef = db.collection("Item").doc(detailId);
      dbRef.get().then(doc => {
        if (doc.exists) {
          const dList = {
            id: doc.id,
            doc,
            ...doc.data()
          };
          setDetails(dList);
          console.log(dList);
        }
      });
    };
    return fetchData();
  }, [detailId]);

  return (
    <div className="detail-container">
      <div className="detail-title">
        <h2>Detail Item page</h2>
      </div>
      <hr />
      <div className="detail-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No.</th>
              <th>상세 품목</th>
              <th>등록자</th>
              <th>등록일자</th>
              <th></th>
            </tr>
          </thead>
          {/*
          {details.map((list, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{list.제품이름}</td>
                <td>{list.관리자}</td>
                <td>
                  {new Date(list.createAt.seconds * 1000).toLocaleString("ko")}
                </td>
                <td>
                  <input type="checkBox" />
                </td>
              </tr>
            </tbody>
          ))}
          */}
        </table>
        <hr />
        <div className="detail-btn">
          <Link to="/">
            <button className="btn btn-outline-info">품목 리스트</button>
          </Link>
          <button className="btn btn-outline-danger">상세 품목 삭제</button>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;
