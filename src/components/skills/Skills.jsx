import React from 'react'
import './skills.scss';
import imgreact from '../../images/react.svg'
import imghtml from '../../images/html.svg'
import imgcss from '../../images/css3.svg'
import imgjavascript from '../../images/javascript.svg'

export default function Skills() {
  return (
    <div className='skills' id='skills'>
      <h2>Skills</h2>
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
          <img src={imgreact} alt="React" id="img-react" />
          <h3>React</h3>
        </div>
      </div>



    </div>
  )
}
