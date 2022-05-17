import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
          <Form/>
        </div>
      </div>      
    </div>
  );
}

export default App;
