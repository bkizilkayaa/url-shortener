import React from 'react'
import '../style/Result.css';
import CopyIcon from '../img/copy.png';

const Result = ({data}) => {
    const responseUrl=`http://localhost:8080/api/v1/url/${data.shortUrl}`;
  return (
    <>
    <h2 className='urlReady'>Your shortened URL is ready!!!</h2>

    <div className='result-container'>
        <h3 className='h3-result'>
            <a href={responseUrl}>api/v1/url/{data.shortUrl}</a>
            </h3>
            <img src={CopyIcon}
      alt="search"
      onClick={()=>{
        navigator.clipboard.writeText(responseUrl);
      }}
     />    
     </div>

    </>

  )
}

export default Result