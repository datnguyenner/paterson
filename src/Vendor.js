import harry from './harry.png';

const Vendor = () => {

  return (
    <div className='ml5-l mr5-l ml2 mr2' style={{ height: '55%' }}>
      <h2 className='mt4 fw7'>Vendor FAQ</h2>
      <div>
        <div>
          <img src={harry} className='img mt3' alt='' style={{ width: '181px', height: '179px'}}/>
          <div className='mt3' style={{ fontSize: '16px', fontWeight: 'bold' }}>PURCHASING CONTACT</div>
          <div style={{ fontSize: '16px'}}>Harry M. Cevallos, QPA, R.P.P.S Purchasing Agent</div>
          <div className='mt3' style={{ fontSize: '16px', fontWeight: 'bold' }}>Phone</div>
          <div className='mt1' style={{ fontSize: '16px'}}>(973) 321-1340</div>
          <div className='mt2' style={{ fontSize: '16px', fontWeight: 'bold' }}>Fax</div>
          <div className='mt1' style={{ fontSize: '16px'}}>(973) 321-1341</div>
          <div className='mt2' style={{ fontSize: '16px', fontWeight: 'bold' }}>Email</div>
          <div className='mt1' style={{ fontSize: '16px'}}>hcevallos@patersonnj.gov</div>
          <div className='mt2' style={{ fontSize: '16px', fontWeight: 'bold' }}>More Info</div>
          <div className='mt1' style={{ fontSize: '16px'}}>View Staff Directory</div>
          <div className='mt4' style={{ fontSize: '16px', fontWeight: 'bold' }}>PURCHASING DEPARTMENT</div>
          <div className='mt2' style={{ fontSize: '16px', fontWeight: 'bold' }}>Hours</div>
          <div className='mt1' style={{ fontSize: '16px'}}>Monday - Friday</div>
          <div className='mt1' style={{ fontSize: '16px'}}>8:30 A.M. - 4:30 P.M.</div>
          <div className='mt2' style={{ fontSize: '16px', fontWeight: 'bold' }}>Address</div>
          <div className='mt1'>155 Market St</div>
          <div className='mt1'>4th Floor</div>
          <div className='mt1'>Paterson, NJ 07505</div>
          <div className='mt1 pointer underline'>Get Directions</div>
        </div>
      </div>
  </div>
  );
};

export default Vendor;
