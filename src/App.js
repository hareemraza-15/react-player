import './App.css';
import ReactPlayer from 'react-player'

function App() {
  return (
    <>

      <p> Hello </p>

      <ReactPlayer
        url='/trp.mp4'
        loop='true'
        autoplay='true'
        controls='true'
      />

      <img src='/trp.gif' alt='hi' className='img' />

    </>
  );
}

export default App;
