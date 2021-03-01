import { useState } from 'react';
import { format, subDays, isAfter } from 'date-fns'

const OpenOpportunities = ({feeds=[]}) => {
  const [inputText, setInputText] = useState('')
  const [filters, setFilters] = useState({
    bid:false,
    rfp: false,
    rfq:false
  })
  
  const renderFeeds = () => {
    if(!feeds.length) {
      return (
        <div className='bg-white pa3 mt3 br1'>
          <h4 className='mt3'>Loading...</h4>
        </div>
        )
    }

    let filterFeeds = feeds.filter(feed => {
      const expiredDate = subDays(new Date(), 30)
      return isAfter(new Date(feed.docdate._text), expiredDate)
    })

    if(filters.bid || filters.rfp || filters.rfq){
      const newFilterFeeds = []
      if(filters.bid){
        filterFeeds.forEach(feed=> {
          if(feed.title._text.toLocaleUpperCase().includes("bid".toLocaleUpperCase())){
            newFilterFeeds.push(feed)
          }
        })
      }
      if(filters.rfp){
        filterFeeds.forEach(feed=> {
          if(feed.title._text.toLocaleUpperCase().includes("rfp".toLocaleUpperCase())){
            newFilterFeeds.push(feed)
          }
        })
      }
      if(filters.rfq){
        filterFeeds.forEach(feed=> {
          if(feed.title._text.toLocaleUpperCase().includes("rfq".toLocaleUpperCase())){
            newFilterFeeds.push(feed)
          }
        })
      }
      filterFeeds=[...newFilterFeeds]
    }
    
    if(inputText.length){
      filterFeeds = feeds.filter(feed=> feed.title._text.toLocaleUpperCase().includes(inputText.toLocaleUpperCase()))
    }

    const showHighlight = (text) => {

      const index = text.toLocaleUpperCase().indexOf(inputText.toLocaleUpperCase())
      if(index > -1){
        return ( 
           <h3 className='ma2'>{text.substring(0,index)}<span className='bg-yellow'>{text.substring(index, index+inputText.length)}</span>{text.substring(index+inputText.length)}</h3>
        )
      }

      return <h3 className='ma2'>{text}</h3>
    }

    return filterFeeds.map((feed, i) => {
      const datePosted = format(new Date(feed.docdate._text), 'MM/dd/yy')
        return (
          <div key={`${i}${feed.title._text}`} className='bg-white pa3 mt3 br1'>
            {showHighlight(feed.title._text)}
            <div className='ma2 mt3'>Date Posted: {datePosted}</div>
            <div className='flex-row ma2 mt4 '>
                <a className='bg-dark-green white pa2 br2 b no-underline' href={feed.link._attributes.href} target='_blank' rel='noreferrer'>View Description</a>
            </div>
          </div>
        )
      })
  }

  return (
    <div className='ml5-l mr5-l ml2 mr2' style={{ height: '55%' }}>
      <h2 className='mt4 fw7'>Open Opportunities</h2>
      <h4 className='mt3 fw4'>Search all opportunities</h4>
      <div className='mt1 w-100 flex flex-row'>
        <input 
        placeholder='Search by contract title' type='text' className='w-100 pa2'
        onChange={(e)=> {
          e.preventDefault();
          setInputText(e.target.value)}
        }
        value={inputText}
        />
      </div>
      <div className='flex flex-row justify-between flex-wrap'>
      <div className='mt4 w-20-ns'>
        <p className='b'>FILTER BY SOLICITATION TYPE</p>
        <div className='flex flex-row'>
          <input className="mt1" type="checkbox" id="bid" name="bid" checked={filters.bid} onClick={()=>setFilters({...filters, bid: !filters.bid})}/>
          <div className="ml2">
            <label className="f4" for="bid">Invitation to bid</label>
            <div className="mt2">Awarded to the lowest qualified bidder</div>
          </div> 
        </div>
        <div className='flex flex-row mt3'>
          <input className="mt1" type="checkbox" id="rfp" name="rfp" checked={filters.rfp} onClick={()=>setFilters({...filters, rfp: !filters.rfp})}/>
          <div className="ml2">
            <label className="f4" for="bid">Requests for proposals (RFP)</label>
            <div className="mt2">Evaluated by cost and quality</div>
          </div> 
        </div>
        <div className='flex flex-row mt3'>
          <input className="mt1" type="checkbox" id="rfq" name="rfq" checked={filters.rfq} onClick={()=>setFilters({...filters, rfq: !filters.rfq})}/>
          <div className="ml2">
            <label className="f4" for="rfq">RFQ</label>
          </div> 
        </div>
        <button className='pa2 br2 mt4 pointer link dim' onClick={()=>setFilters({bid:false,rfp: false,rfq:false})}>Reset all filters</button>
      </div>
      <div className='mt4 w-80-ns w-100'>
        <div className='f4 b'>
          Your Results
        </div>
        <div>
          Showing available opportunities
        </div>
          {renderFeeds()}
        </div>
      </div>
  </div>
  );
};

export default OpenOpportunities;
