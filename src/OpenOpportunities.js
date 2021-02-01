import { useState } from 'react';
import { format } from 'date-fns'

const OpenOpportunities = ({feeds=[]}) => {
  const [inputText, setInputText] = useState('')
  
  const renderFeeds = () => {
    if(!feeds.length) {
      return (
        <div className='bg-white pa3 mt3 br1'>
          <h4 className='mt3'>Loading...</h4>
        </div>
        )
    }

    let filterFeeds = feeds
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
        placeholder='Search by contract title' type='text' className='w-90 pa2'
        onChange={(e)=> {
          e.preventDefault();
          setInputText(e.target.value)}
        }
        value={inputText}
        />
        <button
          className='pointer pa2 white w-10-l'
          style={{ background: '#263F78' }}
        >
          Browse
        </button>
      </div>
      <div className='mt4 f4 b'>
        Your Results
      </div>
      <div>
        Showing available opportunities
      </div>
      {renderFeeds()}
  </div>
  );
};

export default OpenOpportunities;
