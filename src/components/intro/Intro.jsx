import './intro.scss';
import { ParticlesBG } from './Particles';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, { showCursor: false, strings: ['Developer', 'Desinger', 'Content Creator', 'Scopatore di Nunzia'] })


  }, [])
  return (

    <div className='intro' id='intro'>
      <div className='left'>
        <div className='wrapper'></div>
        <div className='intro-shape'>
          <div id="particles-box">
            <ParticlesBG />
          </div>

        </div>

      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hey there!</h2>
          <h1>I'm Florin</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
      </div>

    </div>
  )
}
