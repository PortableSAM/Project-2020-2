import React from "react";
import { Input, Col } from "reactstrap";
import firebase from "../Fire/Fire_Config";
import "./Style/ItemInput.css";

function ItemInput() {
  const [regist, setRegist] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  const [lotNumber, setLotNumber] = React.useState("");
  const [quantity, setQuantity] = React.useState(Number);
  const [unit, setUnit] = React.useState("");
  const [price, setPrice] = React.useState(Number);
  const [date, setDate] = React.useState(Number);
  const [etc, setEtc] = React.useState("");
  const newItemTime = firebase.firestore.Timestamp.fromDate(new Date());

  const newItem = {
    등록자: regist,
    제품이름: itemName,
    로트넘버: lotNumber,
    구매수량: quantity,
    수량단위: unit,
    구매단가: price,
    구매일자: date,
    기타사항: etc,
    createAt: newItemTime
  };

  const handleFormInput = event => {
    event.preventDefault();
    const db = firebase.firestore();
    try {
      const dbRef = db.collection("Item").doc();
      dbRef.set(newItem);
      console.log("Save success");
    } catch (Error) {
      console.error("Save Failed", Error);
      alert("Save Failed");
    }
  };

  return (
    <div className="item-container">
      <div className="input-title">
        <h3>품목등록</h3>
      </div>
      <div className="item-sepc-container">
        <div className="item-registrante">
          <label name="ItemRegistrant">등록자 : </label>
          <input
            type="text"
            placeholder="등록자"
            defaultValue={setRegist}
            onChange={e => setRegist(e.target.value)}
          />
        </div>
        <div className="item-name">
          <label name="ItemName">제품이름 : </label>
          <input
            type="text"
            placeholder="제품이름"
            defaultValue={setItemName}
            onChange={e => setItemName(e.target.value)}
          />
        </div>
        <div className="item-LotNumber">
          <label name="ItemLotNumber">로트넘버 : </label>
          <input
            type="text/number"
            placeholder="Lot Number"
            defaultValue={setLotNumber}
            onChange={e => setLotNumber(e.target.value)}
          />
        </div>
        <div className="item-Quantity">
          <label name="ItemQuantity">구매수량 : </label>
          <input
            type="number"
            name="quantity"
            min="0"
            placeholder="0"
            defaultValue={setQuantity}
            onChange={e => setQuantity(e.target.value)}
          />
          <Col lg={4}>
            <Input
              type="select"
              name="unti"
              placeholder="수량 단위"
              defaultValue={setUnit}
              onChange={e => setUnit(e.target.value)}
            >
              <option>set</option>
              <option>EA</option>
              <option>PK</option>
            </Input>
          </Col>
        </div>
        <div className="item-PurchasePrice">
          <label name="ItemPurchasePrice">구매단가 : </label>
          <input
            type="text"
            name="price"
            placeholder="구매단가"
            defaultValue={setPrice}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        <div className="item-DateOfPurchase">
          <label name="ItemDateOfPurchase">구매일자 : </label>
          <input
            type="date"
            name="date"
            defaultValue={setDate}
            onChange={e => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="item-etc">
        <textarea
          type="input"
          name="item-etc"
          placeholder="품목의 기타 상세정보 기입"
          defaultValue={setEtc}
          onChange={e => setEtc(e.target.value)}
        />
      </div>

      <button
        className="btn btn-secondary"
        type="submit"
        onClick={handleFormInput}
      >
        등 록
      </button>
    </div>
  );
}

export default ItemInput;
