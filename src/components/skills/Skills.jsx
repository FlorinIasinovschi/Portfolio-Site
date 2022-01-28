import React from 'react'
import './skills.scss';
import imgreact from '../../images/react.svg'
import imghtml from '../../images/html.svg'
import imgcss from '../../images/css3.svg'
import imgjavascript from '../../images/javascript.svg'
import nodejs from '../../images/node-js.svg'
import express from '../../images/express.svg'
import expressLogo from '../../images/express-logo.png'

import mongodb from '../../images/mongodb.svg'
import { useSpring, animated } from 'react-spring';

export default function Skills() {

  const rotationLoop = useSpring({
    loop: true,
    from: { rotate: 0 },
    to: { rotate: 360 },
    config: { duration: 4000 }

  });

  return (
    <div className='skills' id='skills'>
      <h2>Skills</h2>
      <div className="container">

        <h3 className='subtitle' >Front End :</h3>

        <div className='wrapper'>

          <div className="html">
            <img src={imghtml} alt="" id='img-html' />
            <h3>HTML</h3>
          </div>
          <div className="css">
            <img src={imgcss} alt="" id='img-css' />
            <h3>CSS</h3>
          </div>
          <div className="javascript">
            <img src={imgjavascript} alt="" id='img-javascript' />
            <h3>JavaScript</h3>
          </div>
          <div className="react">
            <animated.img src={imgreact} style={rotationLoop} alt="React" id="img-react" />
            <h3>React</h3>
          </div>

        </div>
        <h3 className='subtitle' >Back End :</h3>
        <div className='wrapper'>

          <div className="html">
            <img src={nodejs} alt="" id='img-html' />
            <h3>Node Js</h3>
          </div>
          <div className="css">
            <img src={mongodb} alt="" id='img-css' />
            <h3>mongoDB</h3>
          </div>
          <div className="javascript">
            <img src={expressLogo} alt="" id='img-express' />
            <h3>ExpressJS</h3>
          </div>


        </div>
      </div>



    </div>
  )
}
