import './contact.scss';
import './form.scss';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"




export default function Contact() {

  const linkedinURL = "https://www.linkedin.com/in/floriniasinovschi/"
  const githubURL = "https://github.com/FlorinIasinovschi"
  const resumeURL = "https://github.com/FlorinIasinovschi"

  const handleClick = (e) => {
    window.open(e)
  }

  return (
    <div className='contact' id='contact'>
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
