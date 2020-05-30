import React from 'react'
import Header from "./Components/Header/index"
import "./style.css"
import Router from "./routes"

function App() {
  return (
    <div className= "App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
