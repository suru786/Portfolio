import React from 'react'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import Header from './Header/Header';
import "./Home.css";
export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
