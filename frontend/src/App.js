import React,{useEffect, useState} from 'react';
import './App.css';
import CreateUrl from './components/Search';

function App() {

  return (
      <div className="App">
         <div className='header'>
            <h1>URL Shortener</h1>
         </div>
          <div className='container'>
          <h1>Paste your URL to search bar</h1>
             <CreateUrl/>
          </div>
          <div className='container'>
            <h2 className='h1-grad'>URL Shortener is a free tool that allows to create a shortened link making it easy to share</h2>
            <br/>
            <h2>If you want more, try premium version!</h2>
            <br/>
            <h2>Contact me : burak@gmail.com</h2>

          </div>
      </div>   
  );
}

export default App;
