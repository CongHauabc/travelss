import React from "react";
import "./detail.css";
import { Data } from "../Database/db";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Detai = () => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const details = Data.find((datas) => {
      return (datas.id == param.id);
    });

    setDetail(details);
  }, []);
 
  const param = useParams();
  console.log(detail);
  return (
    <div className="detail">
      <div data-aos="zoom-in-down" className="detailContent">
        <div className="imgdetail">
          <img src={detail.imgSrs} />
        </div>
        <div className="detailscontent">
          <h1>{detail.destTitle}</h1>
          <p>{detail.location}</p>
          <p>${detail.fees}</p>

          <p>{detail.description}</p>
          <button className="btn">Liên Hệ</button>
          <Link to={'/'} className='btnclose'>
            <AiOutlineCloseCircle className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detai;
