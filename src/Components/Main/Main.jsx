import React,{useEffect} from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsClipboardCheck } from "react-icons/bs";

// import img
import { Data } from "../Database/db";
import Aos from 'aos';
import 'aos/dist/aos.css'


function Main() {
  const showDetail =()=>{

  }
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destination</h3>
      </div>

      <div className="secContent grid">
        {Data.map((datas) => {
          return (
            <div key={datas.id} data-aos="zoom-in-up"  className="singleDestination">
              <div className="imageDiv">
                <img src={datas.imgSrs[0]} alt={datas.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{datas.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{datas.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {datas.grace}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>${datas.fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{datas.description}</p>
                </div>
                <Link to={`/detai/${datas.id}`}>
                <button className="btn flex">
                  
                  Details
                 
                  <BsClipboardCheck className="icon" />
                </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
