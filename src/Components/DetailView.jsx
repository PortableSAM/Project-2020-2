import React from "react";
import { Link } from "react-router-dom";

const View = ({ itemNm, registor, lot, quantity, price, etc, date, unit }) => {
  return (
    <div className="detail-container">
      <form>
        <div className="detail-item-spec">
          <div className="detail-item-name">
            <h4>{itemNm} Info</h4>
          </div>
          <div className="item-registor">
            <label>- 등록자 : </label>
            <p>{registor}</p>
          </div>
          <div className="regist-date">
            <label>- 등록일 : </label>
            <p>{date}</p>
          </div>
          <div className="lot-number">
            <label> - 로트번호 : </label>
            <p>{lot}</p>
          </div>
          <div className="quantity">
            <label>- 현재수량 : </label>
            <p>{quantity}</p>
            <p>{unit}</p>
          </div>
          <div className="price">
            <label> - 구매가격 :</label>
            <p>{price}</p>
          </div>
          <div className="etc">
            <p>최근 구매일 {date}</p>
            <p>기타 사항 :{etc}</p>
          </div>
        </div>
        <div className="detail-btn">
          <Link to="/">
            <button className="btn btn-outline-info">품목 리스트</button>
          </Link>
          <Link to={`/itemUpdat/`}>
            <button className="btn btn-outline-danger">정보 수정</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default View;
