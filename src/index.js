import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";


function Stamp() {
  return (
    <div className="stamp">
      <p>Stamp</p>
    </div>
  );
}

function Addresslabel({ mailingLabel, className }) {
  const { name, addressLine1, addressLine2 } = mailingLabel;

  return (
    <div className={`mailingLabel ${className}`}>
      <div className="name">{name}</div>
      <div className="addressLine1">{addressLine1}</div>
      <div className="addressLine2">{addressLine2}</div>
    </div>
  );
}

Addresslabel.PropTypes = {
  mailingLabel: PropTypes.shape({
    name: PropTypes.object.isRequired,
    addressLine1: PropTypes.object.isRequired,
    addressLine2: PropTypes.object.isRequired
  }).isRequired
};

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <div>
        <Addresslabel className="to-label" mailingLabel={fromPerson} />
        <Addresslabel className="from-label" mailingLabel={toPerson} />
        <Stamp />
      </div>
    </div>
  );
}

Envelope.PropTypes = {
  toPerson: PropTypes.object,
  fromPerson: PropTypes.object
};

var returnLabel = {
  name: "Mr. Sender",
  addressLine1: "123 Fake St.",
  addressLine2: "Boston, MA 02118"
};
var recipientLabel = {
  name: "Mr. Receiver",
  addressLine1: "123 Fake St.",
  addressLine2: "San Francisco, CA 94101"
};

ReactDOM.render(
  <Envelope toPerson={recipientLabel} fromPerson={returnLabel} />,
  document.getElementById("root")
);
