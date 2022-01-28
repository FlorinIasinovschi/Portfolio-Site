import './contact.scss';
import './form.scss';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"




export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <h2>Let's Work <span className='coloredspan' >Together!</span></h2>

      <div className="wrapper">
        <div className="iconswrapper">
          <div className="iconcontainer">
            <FontAwesomeIcon icon={faGithub} className='btn-icon' />

          </div>
          <div className="iconcontainer">
            <FontAwesomeIcon icon={faLinkedin} className='btn-icon' />

          </div>
          <div className="iconcontainer">
            <FontAwesomeIcon icon={faFileAlt} className='btn-icon' />

          </div>

        </div>
        <Form />

      </div>

    </div>
  )
}
