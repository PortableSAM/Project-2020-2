import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "reactstrap";
import "./Style/MainItem.css";
import { ItemInput } from "./ListIndex";

function MainItem() {
  const [modal, setModal] = useState(false);
  const handleRegist = () => {
    setModal(!modal);
  };

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
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Link to="/detailItem/:id">Mask</Link>
              </td>
              <td>관리자</td>
              <td>2020. 01. 20</td>
              <td>
                <input type="checkBox" />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="main-btn">
          <button className="btn btn-outline-info" onClick={handleRegist}>
            항목 추가
          </button>
          <Modal isOpen={modal} toggle={handleRegist}>
            <ItemInput />
          </Modal>
          <button className="btn btn-outline-danger">항목 삭제</button>
        </div>
      </div>
    </div>
  );
}

export default MainItem;
