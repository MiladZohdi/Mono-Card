import "./styles.css";
import "./cardStyle.css";

import { useState } from "react";
import Card from "./Card";

import CardDetails from "./CardDetails";

export default function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  function handleName(nameN) {
    nameN = nameN.replace(/([^a-zA-Z\s])/g, "");
    setName(nameN);
  }

  function handleCardNumber(cardN) {
    cardN = String(cardN);

    if (cardN.replace(/\s+/g, "").length > 16) return;

    cardN = cardN.replace(/[^\d\s]/g, "");

    cardN = cardN
      .replace(/\s+/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();

    setCardNumber(cardN);
  }

  function handleExpDate(exp) {
    exp = String(exp);

    if (exp.replace(/[^\d]/g, "").length > 4) return;

    exp = exp.replace(/[^\d]/g, "");

    exp = exp.replace(/(\d{2})/g, "$1/");

    if (exp.replace(/[^\d]/g, "").length === 4) exp = exp.slice(0, -1);

    if (exp.replace(/[^\d]/g, "").length === 2) {
      const month = Number(exp.slice(0, 2));
      if (month > 12) {
        exp = "";
        alert("wrong date, please pay attention!");
      }
    }

    setExpDate(exp);
  }

  function handleCvv(cv) {
    if (cv.length > 4) return;
    cv = cv.replace(/([^\d])/g, "");
    setCvv(cv);
  }

  return (
    <div className="App">
      <div className="container">
        <Card name={name} cardNumber={cardNumber} expDate={expDate} />
        <CardDetails
          onNameChange={handleName}
          name={name}
          onCardChange={handleCardNumber}
          cardNumber={cardNumber}
          onExpCahnge={handleExpDate}
          expDate={expDate}
          onCvvChange={handleCvv}
          cvv={cvv}
        />
      </div>
    </div>
  );
}
