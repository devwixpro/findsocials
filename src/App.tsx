import React from 'react';
import './App.css';
const videos = {
  fb:
    '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FUniversalTruth4U%2Fvideos%2F738458040745645%2F&show_text=false&width=476&t=0" width="200" height="200" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>'
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
        </div>
      </header>
    </div>
  );
}

export default App;
