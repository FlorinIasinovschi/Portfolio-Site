import './intro.scss';
import { useEffect, useRef } from 'react';

export default function Intro() {


  return (

    <div className='intro' id='intro'>
      {/* <BlobAnimation color="#3777FF" path1={wave1Path1} path2={wave1Path1} scale={2} cssref="blob-intro-1" wave /> */}
      <div className='left'>

        <div className='wrapper'></div>


      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hey there!</h2>
          <h1>I'm Florin</h1>
          <h3><span >Front End </span>Developer</h3>
        </div>
      </div>

    </div>
  )
}
