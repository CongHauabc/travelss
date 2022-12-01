import React, { useRef } from "react";
import "./detail.css";
import { Data } from "../Database/db";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import CarouselSlider from "react-carousel-slider";
const Detai = () => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const details = Data.find((datas) => {
      return datas.id == param.id;
    });
    setDetail(details);
  });

  const param = useParams();
  console.log(detail.imlist);
  const [imgl,setImgl]=useState(0)
  const handleclick =(i)=>{
    setImgl(i)
    window.scroll(0,0)
  }
  return (
    <div className="detail">
      <div data-aos="zoom-in-down" className="detailContent">
        <div className="imgdetail">
           <img src={detail.imgSrs?.[imgl]} alt={detail.destTitle} /> 
        </div>
        <div className="detailscontent">
          <h1>{detail.destTitle}</h1>
          <p>{detail.location}</p>
          <p>${detail.fees}</p>

          <p>{detail.description}</p>
          <button className="btn"><a href="https://chat.zalo.me/?phone=0979006498"  target="_blank">Liên Hệ</a></button>
          <Link to={"/"} className="btnclose">
            <AiOutlineCloseCircle className="icon" />
          </Link><br/>
          <span>*Click vào hình để xem chi tiết</span>
          <div className="imglist">
            {detail.imgSrs?.map((img,index) => (
              <img  key={index} src={img} onClick={()=>handleclick(index)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detai;
