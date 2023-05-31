import React from 'react';
import './style/App.scss';
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
