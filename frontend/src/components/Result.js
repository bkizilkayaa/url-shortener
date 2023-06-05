import React,{useState} from 'react'
import QRCode from "react-qr-code";
import '../style/Result.css';
import CopyIcon from '../img/copy.png';

const Result = ({data}) => {
    const responseUrl=`http://localhost:8080/api/v1/url/${data.shortUrl}`;
    const [showNotification, setShowNotification] = useState(false);

    const handleCopy=()=>{
      navigator.clipboard.writeText(responseUrl);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000); 
    }

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
      alt="copy"
      onClick={()=>{
        handleCopy();
      }}
     />    
     </div>

      {showNotification && (
        <div className="notification">
          URL copied to clipboard!
        </div>
      )}

     <div className='qr-code'>
         <QRCode value={responseUrl}/>
     </div>

    </>

  )
}

export default Result