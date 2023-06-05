import React from 'react'
import '../style/Info.css';

//icons
import SecureIcon from '../img/secure.png';
import EasyIcon from '../img/easy.png';
import DeviceIcon from '../img/devices.png';
import ShortenedIcon from '../img/shortened.png';



const Info = () => {
  return (
   <div className='Info'>
    <div className="card">
      <img src={EasyIcon}className="card-img" alt='easy'/>
      <div className="card-body">
        <h5 className="card-title">Easy to Use</h5>
        <p className="card-text">URL Shortener is easy and fast, enter the long link to get your shortened link</p>
      </div>
    </div>

    
    <div className="card">
      <img src={SecureIcon}className="card-img" alt='secure' />
      <div className="card-body">
        <h5 className="card-title">Secure to Use</h5>
        <p className="card-text">It is fast and secure, our service has HTTPS protocol and data encryption SHA256</p>
      </div>
    </div>

    <div className="card">
      <img src={DeviceIcon}className="card-img" alt='compatible' />
      <div className="card-body">
        <h5 className="card-title">Devices</h5>
        <p className="card-text">Compatible with smartphones, tablets and desktop.</p>
      </div>
    </div>

    <div className="card">
      <img src={ShortenedIcon}className="card-img" alt='shortened' />
      <div className="card-body">
        <h5 className="card-title">Shortened URL's are easy to share!</h5>
        <p className="card-text">Use any link, no matter what size, URL Shortener always shortens</p>
      </div>
    </div>

   
</div>
  )
}

export default Info