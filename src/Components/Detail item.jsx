import React from "react";
import { Link } from "react-router-dom";
import "./Style/DetailItem.css";

function DetailItem() {
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
          <tbody>
            <tr>
              <td>1</td>
              <td>Gas Mask</td>
              <td>관리자</td>
              <td>2020. 01. 20</td>
              <td>
                <input type="checkBox" />
              </td>
            </tr>
          </tbody>
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
