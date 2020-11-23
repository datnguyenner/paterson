import './App.css';
import headerBackground from './secondary-header-1.png';
import logo from './logo.png';
import { useState } from 'react';
import OpenOpportunities from './OpenOpportunities';
import Contact from './Contact';
import Vendor from './Vendor';
import Upcoming from './Upcoming';

function App() {
  const [selectedTab, setSelectedTab] = useState('open');

  return (
    <div className='center vh-100'>
      <div
        className='vw-100'
        style={{
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          height: '45%'
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
