import React, { useState, useEffect } from "react";
import firebase from "../Fire/Fire_Config";
import "./Style/DetailItem.css";
import View from "./DetailView";

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
    <View
      itemNm={details.itemNm}
      registor={details.registor}
      lot={details.lot}
      quantity={details.quantity}
      price={details.price}
      etc={details.etc}
      date={new Date(details.seconds * 1000).toLocaleString("ko")}
    />
  );
}
export default DetailItem;
