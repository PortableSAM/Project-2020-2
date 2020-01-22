import React, { useState, useEffect } from "react";
import { Modal, Col, Input, ModalFooter } from "reactstrap";
import firebase from "../Fire/Fire_Config";
import "./Style/MainItem.css";
import View from "./MainView";

function MainItem() {
  const [list, SetList] = useState([]);
  const [modal, setModal] = useState(false);
  const handleRegist = () => {
    setModal(!modal);
  };
  const [regist, setRegist] = useState();
  const [itemName, setItemName] = useState();
  const [itemType, setItemType] = useState();
  const [lotNumber, setLotNumber] = useState();
  const [quantity, setQuantity] = useState();
  const [unit, setUnit] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [etc, setEtc] = useState();

  const newItemTime = firebase.firestore.Timestamp.fromDate(new Date());

  const newItemInfo = {
    registor: regist,
    itemNm: itemName,
    type: itemType,
    lot: lotNumber,
    quantity: quantity,
    unit: unit,
    price: price,
    date: date,
    etc: etc,
    createAt: newItemTime
  };

  console.log(newItemInfo);
  const handleFormInput = event => {
    event.preventDefault();
    const db = firebase.firestore();
    try {
      const dbRef = db.collection("Item").doc();
      dbRef.set(newItemInfo);
      console.log("Save success");
      //alert("Save success");
      return handleRegist();
    } catch (Error) {
      console.error("Save Failed", Error);
      alert("Save Failed");
    }
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
      <div className="main-table">
        <table className="table table">
          <thead>
            <tr>
              <th>분류</th>
              <th>제품이름</th>
              <th>등록자</th>
              <th>등록일자</th>
              <th>Delete</th>
            </tr>
          </thead>
          {list.map((list, index) => (
            <View
              key={index}
              id={list.id}
              type={list.type}
              itemNm={list.itemNm}
              registor={list.registor}
              date={new Date(list.createAt.seconds * 1000).toLocaleString("ko")}
            />
          ))}
        </table>
        <div className="main-btn">
          <button className="btn btn-outline-info" onClick={handleRegist}>
            항목 추가
          </button>
          <Modal isOpen={modal} toggle={handleRegist}>
            <form name="item-info" method="POST">
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
                    <label name="item-type">제품분류 :</label>
                    <Col lg={4}>
                      <Input
                        type="select"
                        name="type"
                        defaultValue={setItemType}
                        onChange={e => setItemType(e.target.value)}
                      >
                        <option>Mask</option>
                        <option>Tool</option>
                        <option>Office</option>
                        <option>장갑</option>
                      </Input>
                    </Col>
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
              </div>
            </form>
            <ModalFooter>
              <button className="btn btn-secondary" onClick={handleFormInput}>
                등 록
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default MainItem;
