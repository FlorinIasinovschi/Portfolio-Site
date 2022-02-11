import AboutBg3D from '../3DBackground/Alternative/AboutBg3D'
import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
      <div className="webglBg" >
        <AboutBg3D />
      </div>
      <h2>About Me</h2>
      <div className='wrapper'>

        <div className='description'>I'm a self-taught Software Developer with a background in 3D modeling and Game Art. The enormous potential of software and my passion for problem-solving have led me into pursuing a coding career. During my past experience, I’ve realized how important are tools that automate mundane tasks and help people unleash their creativity. I soon realized that creating those tools would have given me a great sense of fulfillment.
          I then began my journey in code and now I’m enjoying finding solutions to complex problems and creating applications that help people, all while having fun!

        </div>
      </div>

    </div>
  )
}
