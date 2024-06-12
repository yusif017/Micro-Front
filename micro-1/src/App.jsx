import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header";
import UserLayout from "./components/UserLayout";

const App = () => (
  <UserLayout>
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: micro-1</div>
    <button onClick={localStorage.setItem("salam","necesen")}>Salam</button>
 <Header/>
  </div>
  </UserLayout>
);
ReactDOM.render(<App />, document.getElementById("app"));
