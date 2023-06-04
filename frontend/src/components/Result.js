import React from 'react'
import QRCode from "react-qr-code";
import '../style/Result.css';
import CopyIcon from '../img/copy.png';

const Result = ({data}) => {
    const responseUrl=`http://localhost:8080/api/v1/url/${data.shortUrl}`;
  return (
    <>
    <h2 className='urlReady'>Your shortened URL is ready!!!</h2>

    <h3>Scan shortened url down below if necessary &#128293; </h3>
    <br/>
    <div className='result-container'>
        <h3 className='h3-result'>
            <a href={responseUrl} target="_blank" rel="noreferrer">shortener.com/{data.shortUrl}</a>
            </h3>
            <img src={CopyIcon}
      alt="search"
      onClick={()=>{
        navigator.clipboard.writeText(responseUrl);
      }}
     />    
     </div>
     
     <div className='qr-code'>
         <QRCode value={responseUrl}/>
     </div>

    </>

  )
}

export default Result