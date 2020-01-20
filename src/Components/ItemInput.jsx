import React from "react";
import { Input, Col } from "reactstrap";
import "./Style/ItemInput.css";

function ItemInput() {
  const handleFormInput = event => {
    event.preventDefault();
  };

  return (
    <div className="item-container">
      <div className="input-title">
        <h3>품목등록</h3>
      </div>
      <form>
        <div className="item-sepc-container">
          <div className="item-registrante">
            <label name="ItemRegistrant">등록자 : </label>
            <input type="text" placeholder="등록자" />
          </div>
          <div className="item-name">
            <label name="ItemName">제품이름 : </label>
            <Col lg={"auto"}>
              <Input type="select" name="itemSelect" lg={3}>
                <option>Mask</option>
                <option>Gloves</option>
                <option>Tool</option>
                <option>Office Supplies</option>
              </Input>
            </Col>
            <input type="text" placeholder="제품이름" />
          </div>
          <div className="item-LotNumber">
            <label name="ItemLotNumber">로트넘버 : </label>
            <input type="text/number" placeholder="Lot Number" />
          </div>
          <div className="item-Quantity">
            <label name="ItemQuantity">구매수량 : </label>
            <input type="number" name="quantity" min="0" placeholder="0" />
            <input type="text" name="unti" placeholder="수량 단위" />
          </div>
          <div className="item-PurchasePrice">
            <label name="ItemPurchasePrice">구매단가 : </label>
            <input type="text" name="price" placeholder="구매단가" />
          </div>
          <div className="item-DateOfPurchase">
            <label name="ItemDateOfPurchase">구매일자 : </label>
            <input type="date" name="date" />
          </div>
        </div>
        <div className="item-etc">
          <textarea
            type="textarea"
            name="item-etc"
            placeholder="품목의 기타 상세정보 기입"
          />
        </div>
        <button
          type="Submit"
          className="btn btn-secondary"
          onClick={handleFormInput}
        >
          등 록
        </button>
      </form>
    </div>
  );
}

export default ItemInput;
