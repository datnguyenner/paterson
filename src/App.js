import './App.css';
import headerBackground from './secondary-header-1.png';
import logo from './logo.png';
import { useState, useEffect } from 'react';
import convert from 'xml-js'
import OpenOpportunities from './OpenOpportunities';
import Contact from './Contact';
import Vendor from './Vendor';
import Upcoming from './Upcoming';

function App() {
  const [selectedTab, setSelectedTab] = useState('open');
  useEffect(() =>{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.patersonnj.gov/egov/api/request.egov?request=feed;dateformat=%25m-%25d-%25Y;title=Latest%20Documents;ctype=4;classificationid=63;classificationid=67;count=5"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) //
    .then(response => response.text())
    .then(contents => console.log(JSON.parse(convert.xml2json(contents, {compact: true, spaces: 4}))))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))  
})

  return (
    <div className='center' style={{backgroundColor:'#E5E5E5'}}>
      <div
        className='vw-100'
        style={{
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <header className='flex flex-row justify-between flex-wrap'>
          <img src={logo} className='ml5 img mt3' alt='' />
          <div className='flex flex-row justify-between mt4 mr5-l w-50-l w-100'>
            <h3
              className={`ma2 white pointer ${
                selectedTab === 'open' ? 'fw7 underline' : 'fw4'
              }`}
              onClick={() => setSelectedTab('open')}
            >
              Open Opportunities
            </h3>
            <h3
              className={`ma2 white pointer ${
                selectedTab === 'upcoming' ? 'fw7 underline' : 'fw4'
              }`}
              onClick={() => setSelectedTab('upcoming')}
            >
              Upcoming Opportunities
            </h3>
            <h3
              className={`ma2 white pointer ${
                selectedTab === 'vendor' ? 'fw7 underline' : 'fw4'
              }`}
              onClick={() => setSelectedTab('vendor')}
            >
              Vendor FAQ
            </h3>
            <h3
              className={`ma2 white pointer ${
                selectedTab === 'contact' ? 'fw7 underline' : 'fw4'
              }`}
              onClick={() => setSelectedTab('contact')}
            >
              Contact Us
            </h3>
          </div>
          <div className='ma4 mr5 mr4-l pa4 bg-white br2 w-100 w-50-l' style={{marginLeft:'10%'}}>
            <div className='mb3' style={{fontSize:'44px', fontWeight:'bold'}}>Your business may have just what the City of Paterson needs.</div>
            <div className='mb3' style={{fontSize:'28px'}}>Browse open and upcoming opportunities to sell to the City.</div>
            <div style={{fontSize:'18px'}}>New to this site? Read our Vendor FAQ.</div>
          </div>
        </header>
      </div>
      {selectedTab === 'open' && <OpenOpportunities />}
      {selectedTab === 'upcoming' && <Upcoming />}
      {selectedTab === 'vendor' && <Vendor />}
      {selectedTab === 'contact' && <Contact />}
    </div>
  );
}

export default App;
