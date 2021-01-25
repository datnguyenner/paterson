import { useState } from 'react';
import { format, addMonths } from 'date-fns'

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

    return feeds.map((feed, i) => {
      const datePosted = format(new Date(feed.updated._text), 'MM/dd/yy')
      const responseDeadline = format(addMonths(new Date(feed.updated._text),1), 'MM/dd/yy')

        return (
          <div key={`${i}${feed.title._text}`} className='bg-white pa3 mt3 br1'>
            <h3 className='ma2'>{feed.title._text}</h3>
            <div className='ma2 mt3'>{feed.classification_id._text}</div>
            <div className='ma2 mt3'>Purchasing</div>
            <div className='ma2 mt4'>Response Deadline: {responseDeadline}</div>
            <div className='ma2'>Date Posted: {datePosted}</div>
            <div className='flex-row ma2 mt4 '>
                <a className='bg-dark-green white pa2 br2 b' href={feed.link._attributes.href} target='_blank' rel='noreferrer'>View Description</a>
                <a className='dark-blue pa2 ml2 b' href={feed.link._attributes.href} target='_blank' rel='noreferrer'>Download Submission Files</a>
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
        placeholder='Search by contract title, keyword, department, or NIGP code' type='text' className='w-90 pa2'
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
