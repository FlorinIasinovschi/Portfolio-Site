import './intro.scss';
import { useEffect, useRef } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Intro() {


  return (

    <div className='intro' id='intro'>
      <div className='left'>

        <div className='wrapper'></div>


      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2 className='heythere' >Hey there!</h2>
          <h1>I'm Florin</h1>
          <h3 className='frontend' ><span >Software </span>Engineer</h3>
          <h2 className='projects' >Projects </h2>
          <FontAwesomeIcon icon={faChevronDown} className='arrow-icon' />
        </div>
      </div>

    </div>
  )
}
