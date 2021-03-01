import './App.css';
import headerBackground from './secondary-header-1.png';
import logo from './logo.png';
import menu from './menu.svg';
import footer from './footer.png'
import { useState, useEffect } from 'react';
import OpenOpportunities from './OpenOpportunities';
import Vendor from './Vendor';
import Upcoming from './Upcoming';

function App() {
  const [selectedTab, setSelectedTab] = useState('open');
  const [data, setData] = useState([]);

  useEffect(() =>{
    const url = "https://polar-crag-76665.herokuapp.com/documents"; // site that doesn’t send Access-Control-*
    fetch(url) //
    .then(response => response.json())
    .then(contents => setData(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    //const jsonData = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}))
    //setData(jsonData)
},[])

  return (
    <div className='center' style={{backgroundColor:'#E5E5E5', minWidth:'375px'}}>
      <div
        style={{
          backgroundImage: `url(${headerBackground})`,
          backgroundColor:'red',
          backgroundSize:'cover',
          backgroundRepeat: 'no-repeat',
          height:'55vh'
        }}
      >
        <header className='flex flex-row justify-between flex-wrap'>
          <img src={logo} className='ml3 ml5-ns img mt3' alt='' />
          <div className='flex flex-row dn di-ns justify-between mt4 mr5-l w-50-l w-100'>
            <h3
              className={`ma2 dn di-ns white pointer ${
                selectedTab === 'open' ? 'fw7 underline' : 'fw4'
              }`}
              onClick={() => setSelectedTab('open')}
            >
              Open Opportunities
            </h3>
            <h3
              className={`ma2 dn di-ns white pointer ${
                selectedTab === 'upcoming' ? 'fw7 underline' : 'fw4'
              }`}
              onClick={() => setSelectedTab('upcoming')}
            >
              Upcoming Opportunities
            </h3>
            <h3
              className={`ma2 dn di-ns white pointer ${
                selectedTab === 'vendor' ? 'fw7 underline' : 'fw4'
              }`}
              onClick={() => setSelectedTab('vendor')}
            >
              Vendor FAQ
            </h3>
          </div>
          <div className='w-100 relative mr3 ml3 di dn-ns pointer link hide-child'>
            <img src={menu} className='fr' alt='' />
            <div className='absolute child br2' style={{top:0, left: 120, width: 225, backgroundColor: '#191970'}}>
              <div
                className={`ma2 white pointer ${
                  selectedTab === 'open' ? 'fw7 underline' : 'fw4'
                }`}
                onClick={() => setSelectedTab('open')}
              >
                Open Opportunities
              </div>
              <div
                className={`ma2 white pointer ${
                  selectedTab === 'upcoming' ? 'fw7 underline' : 'fw4'
                }`}
                onClick={() => setSelectedTab('upcoming')}
              >
                Upcoming Opportunities
              </div>
              <div
                className={`ma2 white pointer ${
                  selectedTab === 'vendor' ? 'fw7 underline' : 'fw4'
                }`}
                onClick={() => setSelectedTab('vendor')}
              >
                Vendor FAQ
              </div>
            </div>
          </div>

          <div className='mt5-ns mt2 mr-5-ns ml3 mr3 ml6-l pa2 pa4-ns bg-white br2 w-100 w-50-l'>
            <div className='mb2 f3 f2-ns mb3-ns' style={{fontWeight:'bold'}}>Your business may have just what the City of Paterson needs .</div>
            <div className='mb2 f4 f3-ns mb3-ns'>Browse open and upcoming opportunities to sell to the City.</div>
            <div className='f5 f4-ns'>New to this site? <span className='dark-blue pointer fw7 underline' onClick={() => setSelectedTab('vendor')}>Read our Vendor FAQ.</span></div>
          </div>
        </header>
      </div>
      {selectedTab === 'open' && <OpenOpportunities feeds={data}/>}
      {selectedTab === 'upcoming' && <Upcoming />}
      {selectedTab === 'vendor' && <Vendor />}
      <img className='mt5' src={footer} alt='' style={{width:'100vw'}}/>
    </div>
  );
}

export default App;
