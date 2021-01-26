
const Upcoming = () => {

  return (
    <div className='ml5-l mr5-l ml2 mr2' style={{ height: '55%' }}>
      <h2 className='mt4 fw7'>Upcoming Opportunities</h2>
      <h4>Search open opportunities</h4>
      <h3>Opportunities with the City of Paterson</h3>
      <p>Are you a business that is looking to sell your products or services? Think about selling to the Paterson city government!
As part of the functioning of our government, we need to buy a wide range of goods and services. Examples include food, office supplies, printing, janitorial services, signs, legal services, air conditioners, and so much more. The city spends roughly 40-50 Million USD on buying goods and services yearly. A sample list of goods and services we purchase can be found here</p>
      <h4>Upcoming Procurement List</h4>
      <p>For your convenience, we have a forecast of our upcoming procurement needs. You are not able to bid on these contracts yet, but the City expects that they will open for bidding within the next few months. We encourage you to check out this list and think if your business may be interested in submitting a bid for one of these, so that you will be prepared to do so when the time comes.</p>
      <h4>Explanation of Terms</h4>
      <p>The listing below is for informational purpose only and the City of Paterson reserves the right to not bid any of the items listed below.</p>
      <p><b>Department: </b>Name of the department that is the customer</p>
      <p><b>Contract Type: </b>The type of good or service that that the contract is looking for</p>
      <p><b>Estimated Value: </b>The expected dollar amount of the contract</p>
      <p><b>Estimated Term: </b>The approximate timeframe in months for when the contract would be carried out</p>
      <p><b>Anticipated Ad Date: </b>The approximate date/quarter (calendar year) when this contract is expected to be open for bidding</p>
      <p><b>Funding Source: </b>The type of funding source for the contract</p>
      <div>
      <iframe className="airtable-embed" src="https://airtable.com/embed/shrsvarI56br9cOos?backgroundColor=teal&viewControls=on" style={{ height: '100vh', width:'100%'}}></iframe>
      </div>
  </div>
  
  );
};

export default Upcoming;
