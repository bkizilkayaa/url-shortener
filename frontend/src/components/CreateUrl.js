import React,{useState} from 'react';
//style
import '../style/CreateUrl.css';
//icons
import SearchIcon from '../img/search.svg';

//components
import Result from './Result';
import ErrorResult from './ErrorResult'

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

      const checkTheUrlIfItsTrue = () => {
        const validDomains = 
        [".com", ".org", ".tr", ".net", ".co",
         ".io", ".ai", ".istanbul", ".shop", ".info"];
        return validDomains.some(domain => longUrl.includes(domain));
      };
      
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
        if(checkTheUrlIfItsTrue())
          createShortenerUrl();
      }}
     />
    </div>  
    {(isRequestSuccess && successData!=null) && <Result data={successData}/>}
    </>
  );
}

export default CreateUrl;