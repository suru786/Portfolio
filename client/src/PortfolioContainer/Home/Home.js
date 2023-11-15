import React from 'react'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import Header from './Header/Header';
import "./Home.css";
export default function Home () {
  return (
    <div className="home-container">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}
