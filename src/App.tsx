import React from 'react';
import './App.css';
const videos = {
  fb:
    '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100069083892544%2Fvideos%2F1427241784455077%2F&show_text=0&width=112" width="112" height="150" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" encrypted-media; allowFullScreen="true"></iframe>'
};
function Iframe(props: any) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
const player = () => {
  return (
    <div className='col'>
      <Iframe iframe={videos["fb"]} allow="autoplay" />
      <Iframe iframe={videos["fb"]} allow="autoplay" />
      <Iframe iframe={videos["fb"]} allow="autoplay" />
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
          {player()}
        </div>
      </header>
    </div>
  );
}

export default App;
