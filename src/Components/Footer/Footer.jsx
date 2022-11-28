import React,{useEffect} from "react";
import "./footer.css";
import videofooter from "../assets/videofooter.mp4";
import { FiSend } from "react-icons/fi";

import { MdOutlineTravelExplore } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css'
function Footer() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={videofooter} loop muted autoPlay typeof="video/mp4"></video>
      </div>
      <div className="secContent  container">
        <div className="contactDiv flex">
          <div data-aos='fade-down-left' className="text">
            <small>Keep in touch</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos='flip-up' type="text" placeholder="Enter Email Address" />
            <button data-aos='flip-right' className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>
          </div>
          <div className="footerLink grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                About us
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Privacy Policy
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">PARTINER</span>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Booking
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                About us
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Privacy Policy
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                About us
              </li>
              <li className="footerList  flex">
                <FiChevronRight className="icon" />
                Privacy Policy
              </li>
            </div>
          </div>

          <div className="nch">
            <p>© NCH. All right reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
