import { useState } from 'react';

const OpenOpportunities = () => {

  const [inputText, setInputText] = useState('')

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
  </div>
  );
};

export default OpenOpportunities;
