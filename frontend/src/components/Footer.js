import React from 'react';
import '../style/Footer.css';

//icons
import buttonImg from '../img/uptoTop.png';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';

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
  return (
    <div className='ft'>
            <h3 className='ft-h2'> URL Shortener App. developed by Burak Kizilkaya</h3>
            <h3 className='ft-h2'> You can contact me below</h3>
            <div className='about'>
                <img src={githubIcon}  onClick={handleRedirectToGithub}/>
                <img src={linkedinIcon}  onClick={handleRedirectToLinkedin} />
            </div>
            <div className='contentUp'>
                <img src={buttonImg} onClick={handleScrollToTop} alt='Up to top'/>
            </div>
    </div>
  )
}

export default Footer