import React from 'react';
import './detail.css';
import { Data } from '../Database/db';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Detai = () => {
    const [detail,setDetail] = useState({})
    useEffect(()=>{
        const details= Data.find((datas)=>{
            return datas.id = param.id
        })
        
        setDetail(details)
        
    },[])
    const param = useParams()
    console.log(detail);
    return (
        
        <div className='detail'>
             <div className='detailContent'>
           <h1>{detail.destTitle}</h1>
           
             
             </div>
        </div>
    );
}

export default Detai;
