import React from 'react';
import './App.css';
import CreateUrl from './components/CreateUrl';
import Info from './components/Info';
function App() {

  return (
      <div className="App">
         <div className='header'>
            <h1 className='h1-tag'>URL Shortener</h1>
         </div>
          <div className='container'>
            <h1 className='h1-tag'>Paste your URL to search bar</h1>
               <CreateUrl/>
          </div>
          <div className='container'>
            <h2 className='h1-grad'>URL Shortener is a free tool that allows to create a shortened link making it easy to share</h2>
            <br/>
            <h2>&#8987; Premium version &#128064; Soon!</h2>
            <br/>
            <h2>Contact me : burakkizilkaya99@gmail.com</h2>
          </div>
          <div className='container-info'>
            <Info/>
          </div>
      </div>   
  );
}

export default App;
