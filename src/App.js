import { useState, useEffect } from 'react'
import { Button } from 'reactstrap';
import './App.css';
import shishoo from './audios/shishoo.m4a'

export const App = () =>  {
  let [audio] = useState(new Audio(shishoo));
  audio.loop = true
  
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [audio, playing]
  );

  return (
    <div className="App">
      <Button className='mt-5' color='primary' onClick={toggle}>Shi Shoo</Button>

    </div>
  );
}

export default App;
