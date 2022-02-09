import './contact.scss';
import './form.scss';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import ContactBg3D from '../3DBackground/Alternative/ContactBg3D';



export default function Contact() {

  const linkedinURL = "https://www.linkedin.com/in/floriniasinovschi/"
  const githubURL = "https://github.com/FlorinIasinovschi"
  const resumeURL = "https://drive.google.com/file/d/19aRFpO8vway6bzCb4nZHMLihrf8_XW4u/view"

  const handleClick = (e) => {
    window.open(e)
  }

  return (
    <div className='contact' id='contact'>
      <div className="wbglBg" >
        {/* <ContactBg3D /> */}
      </div>
      <h2>Let's Get In <span className='coloredspan' >Touch!</span></h2>

      <div className="wrapper">
        <div className="iconswrapper">
          <div onClick={() => handleClick(githubURL)} className="iconcontainer">
            <FontAwesomeIcon icon={faGithub} className='btn-icon' />

          </div>
          <div onClick={() => handleClick(linkedinURL)} className="iconcontainer">
            <FontAwesomeIcon icon={faLinkedin} className='btn-icon' />

          </div>
          <div onClick={() => handleClick(resumeURL)} className="iconcontainer">
            <FontAwesomeIcon icon={faFileAlt} className='btn-icon' />

          </div>

        </div>
        <Form />

      </div>

    </div>
  )
}
