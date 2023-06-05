import React from 'react';
import '../style/Footer.css';

//icons
import buttonImg from '../img/uptoTop.png';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';
import instagramIcon from '../img/instagram.png';

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    const handleRedirectToGithub = ()=>{
        window.open("https://github.com/bkizilkayaa",'_blank');
    }
    const handleRedirectToLinkedin = ()=>{
        window.open("https://linkedin.com/in/burakkizilkaya/",'_blank');
    }
    const handleRedirectToInstagram=()=>{
      window.open("https://instagram.com/bkizilkayaa",'_blank');
    }
  return (
    <div className='ft'>
            <h3 className='ft-h2'> URL Shortener App. developed by Burak Kizilkaya</h3>
            <h3 className='ft-h2'> Check out my social</h3>
            <div className='about'>
                <img src={githubIcon}  alt='github' onClick={handleRedirectToGithub}/>
                <img src={linkedinIcon} alt='linkedin' onClick={handleRedirectToLinkedin} />
                <img src={instagramIcon} alt='instagram' onClick={handleRedirectToInstagram} />
            </div>
            <div className='contentUp'>
                <img src={buttonImg} onClick={handleScrollToTop} alt='Up to top'/>
            </div>
    </div>
  )
}

export default Footer