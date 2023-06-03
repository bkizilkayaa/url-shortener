import React,{useEffect, useState} from 'react';
import '../style/CreateUrl.css';
import SearchIcon from '../img/search.svg';

import Result from './Result';

const CreateUrl = () => {
    const[longUrl,setLongUrl]=useState(""); 
    const[isRequestSuccess,setIsRequestSuccess]=useState(false);
    const[successData,setSuccessData]=useState([]);
    const API_URL='http://localhost:8080/api/v1/url';

    const createShortenerUrl = async () => {
        try {
          const requestData = {
            originalUrl: longUrl
          };
          const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Successful!', data);
            setIsRequestSuccess(true);
            setSuccessData(data);
          } else {
            console.log('There is an error:', response.status);
          }
        } catch (error) {
          console.log('General error occurred:', error);
        }
      };

      const getUrlList = ()=>{
        fetch(API_URL)
        .then(res => {
            if (res.ok && res.status === 200) {
              return res.json();
            }
          })
          .then(data => {
            console.log(data);
          })
          .catch(err => console.log(err));
      }
  return (
    <>
        <div className='searchBar'>
      <input
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter long url here"
      />
      <img src={SearchIcon}
      alt="search"
      onClick={()=>{
        createShortenerUrl();
      }}
     />
    </div>
    {(isRequestSuccess && successData!=null) && <Result data={successData}/>}
    </>
  );
}

export default CreateUrl;