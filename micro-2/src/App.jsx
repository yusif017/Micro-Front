import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const Header = React.lazy(()=> import('data/Header')) ;
const UserLayout = React.lazy(()=> import('data/UserLayout')) ;

const App = () =>{

 return(

  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: micro-2</div>
    <Suspense fallback={<div>Loading ...</div>}>
      <UserLayout>
      <Header />
      </UserLayout>
    </Suspense>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
