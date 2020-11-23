import './App.css';
import headerBackground from './secondary-header-1.png';
import logo from './logo.png';

function App() {
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
            <h3 className='ma2 white fw7 underline'>Open Opportunities</h3>
            <h3 className='ma2 white fw4'>Upcoming Opportunities</h3>
            <h3 className='ma2 white fw4'>Vendor FAQ</h3>
            <h3 className='ma2 white fw4'>Contact Us</h3>
          </div>
        </header>
      </div>
      <div className='ml5 mr5' style={{ height: '55%' }}>
        <h2 className='ma2 fw4'>Open Opportunities</h2>
      </div>
    </div>
  );
}

export default App;
