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
            ...doc.data(),
            ...doc.data().createAt
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
      <form>
        <div className="detail-item-spec">
          <div className="detail-item-name">
            <h4>{details.itemNm} Info</h4>
          </div>
          <div className="item-registor">
            <label>- 등록자 : </label>
            <p>{details.registor}</p>
          </div>
          <div className="regist-date">
            <label>- 등록일 : </label>
            <p>{new Date(details.seconds * 1000).toLocaleString("ko")}</p>
          </div>
          <div className="lot-number">
            <label> - 로트번호 : </label>
            <p>{details.lot}</p>
          </div>
          <div className="quantity">
            <label>- 현재수량 : </label>
            <p>{details.quantity}</p>
            <p>{details.unit}</p>
          </div>
          <div className="price">
            <label> - 구매가격 :</label>
            <p>{details.price}</p>
          </div>
          <div className="etc">
            <p>최근 구매일 {details.date}</p>
            <p>기타 사항 :{details.etc}</p>
          </div>
        </div>
        <div className="detail-btn">
          <Link to="/">
            <button className="btn btn-outline-info">품목 리스트</button>
          </Link>
          <Link to={`/itemUpdat/${details.id}`} details={details}>
            <button className="btn btn-outline-danger">정보 수정</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default DetailItem;
