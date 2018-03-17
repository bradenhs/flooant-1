import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Website } from "./Website";

if ((module as any).hot) {
  (module as any).hot.accept(() => {
    document.body.innerText = "Loading...";
    location.reload();
  });
}

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<Website />, root);
