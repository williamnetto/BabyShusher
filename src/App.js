import React, { useState } from 'react'
import { Button, Row, Col } from 'reactstrap';
import './App.css';
import shishoo from './audios/shishoo.m4a';
import shhShhShh from './audios/shh-shh-shh.m4a';
import shhhhhhh from './audios/shhhhhhh.m4a';
import soundIcon from './image/speaker-icon.svg';

const audios = [
  {name: 'Shi Shoo', audio: new Audio(shishoo)},
  {name: 'Shh Shh Shh', audio: new Audio(shhShhShh)},
  {name: 'Shhhhhh', audio: new Audio(shhhhhhh)}
];

export const App = () =>  { 
  const [isPlaying, setIsPlaying] = useState(false);
  
  const getCurrentAudio = () => {
    return audios.find(obj => false === obj.audio.paused);
  }

  const toggle = (nextAudio) => {
    const audioObj = getCurrentAudio();

    if (audioObj && audioObj.audio !== nextAudio) {
        audioObj.audio.pause();
    }

    nextAudio.loop = true;
    nextAudio.paused ? nextAudio.play() : nextAudio.pause();
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="App">
      <Row className='mt-5'>
      { audios.map((item) => 
        <Col>
          <Button color='success' size='lg' onClick={() => toggle(item.audio)} style={{width: '200px'}}>
            {!item.audio.paused && <img src={soundIcon} alt='play' height="32" width="32" style={{marginRight: '10px'}} />}
            {item.name}
          </Button>
        </Col>
      )}
      </Row>
    </div>
  );
}

export default App;
