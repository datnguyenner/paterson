import './App.css';
import headerBackground from './secondary-header-1.png';
import logo from './logo.png';
import { useState, useEffect } from 'react';
import convert from 'xml-js'
import OpenOpportunities from './OpenOpportunities';
import Contact from './Contact';
import Vendor from './Vendor';
import Upcoming from './Upcoming';

const xml = `<?xml version="1.0" encoding="ISO-8859-1"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	
	<title>Latest Documents</title>
	<link rel="self" href="https://www.patersonnj.gov/egov/api/request.egov?request=feed;dateformat=%25m%2D%25d%2D%25Y;featured=3;title=Latest%20Documents;ctype=4;classificationid=63" />
	<updated>2021-01-21T09:22:25</updated>
	<id>https://www.patersonnj.gov/egov/api/request.egov?request=feed;dateformat=%25m%2D%25d%2D%25Y;featured=3;title=Latest%20Documents;ctype=4;classificationid=63</id>
	<author>
		<name>Organization Information</name>
	</author>

		<years>
		
			<year>2021</year>
		
			<year>2020</year>
		
			<year>2019</year>
  
			<year>2018</year>
		
			<year>2017</year>
		
			<year>2016</year>
		
			<year>2015</year>
		
			<year>2014</year>
		
			<year>2013</year>
		
			<year>2012</year>
		
			<year>2011</year>
		
			<year>2010</year>
		
			<year>2009</year>
		
			<year>2008</year>
		
		</years>
	

	
		<entry>
			<title>12-17-2020 BOARD OF ADJUSTMENT REGULAR MEETING CANCELLED DUE TO INCLEMENT WEATHER AND RESCHEDULED TO MARCH 25, 2021 @ 7:30 P.M.</title>
			<link rel="alternate" href="https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4175" />
			<updated>2020-12-16T20:11:49</updated>
			<id>https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4175</id>
      <featured>1</featured>
			
			
			<classification_name>News &amp; Notices</classification_name>
			<classification_id>62</classification_id>
		</entry>
	
		<entry>
			<title>1-28-2021 BOARD OF ADJUSTMENT REGULAR MEETING AGENDA @ 7:30 P.M.</title>
			<link rel="alternate" href="https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4238" />
			<updated>2021-01-19T16:59:51</updated>
			<id>https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4238</id>
      <featured>1</featured>
			<classification_name>News &amp; Notices</classification_name>
			<classification_id>62</classification_id>
		</entry>
	
		<entry>
			<title>1-26-2021 PLANNING BOARD SPECIAL MEETING AGENDA @ 6:30 P.M.</title>
			<link rel="alternate" href="https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4236" />
			<updated>2021-01-19T15:36:06</updated>
			<id>https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4236</id>
      <featured>0</featured>
			<classification_name>News &amp; Notices</classification_name>
			<classification_id>62</classification_id>
		</entry>
	
		<entry>
			<title>1-26-2021 PLANNING BOARD SPECIAL MEETING AGENDA @ 7:00 P.M.</title>
			<link rel="alternate" href="https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4237" />
			<updated>2021-01-19T15:34:43</updated>
			<id>https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4237</id>
      <featured>0</featured>
			
			
			<classification_name>News &amp; Notices</classification_name>
			<classification_id>62</classification_id>
		</entry>
		<entry>
			<title>HPC 1/25/2021 Regular Meeting Agenda</title>
			<link rel="alternate" href="https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4243" />
			<updated>2021-01-21T09:22:25</updated>
			<id>https://www.patersonnj.gov/egov/apps/document/center.egov?view=item;id=4243</id>
      <featured>0</featured>
			<classification_name>Agendas</classification_name>
			<classification_id>63</classification_id>
		</entry>
</feed>

`
function App() {
  const [selectedTab, setSelectedTab] = useState('open');
  const [data, setData] = useState({});

  useEffect(() =>{
/*     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.patersonnj.gov/egov/api/request.egov?request=feed;dateformat=%25m-%25d-%25Y;title=Latest%20Documents;ctype=4;classificationid=63;classificationid=67;count=5"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) //
    .then(response => response.text())
    .then(contents => setData(JSON.parse(convert.xml2json(contents, {compact: true, spaces: 4}))))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) */
    const jsonData = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}))
    setData(jsonData)
}, [])

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
      {selectedTab === 'open' && <OpenOpportunities feeds={data?.feed?.entry}/>}
      {selectedTab === 'upcoming' && <Upcoming />}
      {selectedTab === 'vendor' && <Vendor />}
      {selectedTab === 'contact' && <Contact />}
    </div>
  );
}

export default App;
