import React,{useState} from 'react'
import Typical from "react-typical";

import imgBack from '../../images/mailz.jpg';
import load1 from '../../images/load2.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animation from '../../utilities/Animation';
import './ContactMe.css';
export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animation.animation.fadeInScreen(props.id);
      };
    
    const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  
  return (
    <div className="cmain-container " id={props.id || ""}>
      <div className='contact-me-parent'>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"}/>
      <div className='central-form'>
        <div className='col'>
        <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch....", 1000]} />
          </h2>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>  
      </div>
    </div>
    </div>
  ); 
}