import React from 'react';
import ReactPlayer from 'react-player'
import './App.css';

const player = () => {
  return (
    <div className='col'>
      <ReactPlayer className="item" width={200} height={123} playing url='https://www.facebook.com/facebook/videos/10153231379946729/' />
      <ReactPlayer className="item" width={200} height={123} playing url='https://www.facebook.com/facebook/videos/10153231379946729/' />
      <ReactPlayer className="item" width={200} height={123} playing url='https://www.facebook.com/facebook/videos/10153231379946729/' />
      <ReactPlayer className="item" width={200} height={123} playing url='https://www.facebook.com/facebook/videos/10153231379946729/' />
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='flex-grid'>
          {player()}
          {player()}
          {player()}
          {player()}
          {player()}
          {player()}
        </div>
      </header>
    </div>
  );
}

export default App;
