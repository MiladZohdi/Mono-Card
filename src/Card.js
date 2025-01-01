export default function Card({ name, cardNumber, expDate }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <span style={{ fontFamily: "Roboto" }}>MONOBANK </span>
          <span style={{ color: "#475569", fontWeight: "bold" }}> | </span>
          <span style={{ color: "#475569", fontFamily: "Roboto" }}>
            UNIVERSAL BANK
          </span>
        </div>
        <div className="logo">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
          <div className="line line4"></div>
        </div>
      </div>
      <div className="chip">
        <div className="rect"></div>
        <div className="rect"></div>
        <div className="rect"></div>
        <div className="rect centerRect"></div>
        <div className="rect"></div>
        <div className="rect"></div>
        <div className="rect"></div>
      </div>

      <div className="card-number">
        <p className="">{cardNumber ? cardNumber : "0000 0000 0000 0000"}</p>
      </div>

      <div className="card-footer">
        <div className="master-logo">
          <div className="circle circle-red"></div>
          <div className="circle"></div>
        </div>

        <p className="exp-date-txt">
          VALID <br />
          THRU
        </p>
        <p className="exp-date">{expDate ? expDate : "MM/DD"}</p>

        <p className="card-holder-name"> {name ? name : "cardholder name"} </p>
      </div>
    </div>
  );
}
