import React from "react";
import ReactDOM from "react-dom";
import App from "../../checkout-app/src/App";

export const init = () => {
  ReactDOM.render(<App />, document.querySelector(".checkout-page"));
};
