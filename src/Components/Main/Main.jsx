import React,{useEffect} from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { BsClipboardCheck } from "react-icons/bs";

// import img
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Data = [
  {
    id: 1,
    imgSrs: img1,
    destTitle: "Bora Bora",
    location: "Việt Nam",
    grace: "Hà Nội",
    fees: 700,
    description:
      "Thành phố Sầm Sơn được thành lập vào năm 2017 trên cơ sở toàn bộ diện tích và dân số của thị xã Sầm Sơn theo Nghị quyết số 368/NQ-UBTVQH14 của Ủy ban thường vụ Quốc hội[2]. Thành phố hiện là đô thị loại III và là một địa điểm du lịch biển nổi tiếng tại Việt Nam.",
  },
  {
    id: 2,
    imgSrs: img2,
    destTitle: "Bora Bora",
    location: "Việt Nam",
    grace: "Hà Nội",
    fees: 700,
    description:
      "Thành phố Sầm Sơn được thành lập vào năm 2017 trên cơ sở toàn bộ diện tích và dân số của thị xã Sầm Sơn theo Nghị quyết số 368/NQ-UBTVQH14 của Ủy ban thường vụ Quốc hội[2]. Thành phố hiện là đô thị loại III và là một địa điểm du lịch biển nổi tiếng tại Việt Nam.",
  },
  {
    id: 3,
    imgSrs: img3,
    destTitle: "Bora Bora",
    location: "Việt Nam",
    grace: "Hà Nội",
    fees: 700,
    description:
      "Thành phố Sầm Sơn được thành lập vào năm 2017 trên cơ sở toàn bộ diện tích và dân số của thị xã Sầm Sơn theo Nghị quyết số 368/NQ-UBTVQH14 của Ủy ban thường vụ Quốc hội[2]. Thành phố hiện là đô thị loại III và là một địa điểm du lịch biển nổi tiếng tại Việt Nam.",
  },
  {
    id: 4,
    imgSrs: img4,
    destTitle: "Bora Bora",
    location: "Việt Nam",
    grace: "Hà Nội",
    fees: 700,
    description:
      "Thành phố Sầm Sơn được thành lập vào năm 2017 trên cơ sở toàn bộ diện tích và dân số của thị xã Sầm Sơn theo Nghị quyết số 368/NQ-UBTVQH14 của Ủy ban thường vụ Quốc hội[2]. Thành phố hiện là đô thị loại III và là một địa điểm du lịch biển nổi tiếng tại Việt Nam.",
  },
];

function Main() {
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
            <div key={datas.id} data-aos="zoom-in-up" className="singleDestination">
              <div className="imageDiv">
                <img src={datas.imgSrs} alt={datas.destTitle} />
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
                <button className="btn flex">
                  Details
                  <BsClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
