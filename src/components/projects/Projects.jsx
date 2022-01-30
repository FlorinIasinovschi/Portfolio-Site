import './projects.scss'
import '../../global.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactPlayer from 'react-player';


export default function Projects({ title, techStack, description, previewImg, sectionTitle, video, urlDemo, urlCode }) {

  const openLink = (btn) => {
    if (btn === "demo") {
      window.open(urlDemo);
    }
    if (btn === "code") {
      window.open(urlCode);
    }

  }

  return (
    <div className='projects' id='projects'>
      {sectionTitle && <h2 className='section-title'>Projects</h2>}
      {/* <BlobAnimation color="#669cff" path1={blob1Path1} path2={blob1Path2} scale={1} cssref="blob-prj-1" /> */}
      <div className="wrapper">
        <h2 className='project-title'>{title}</h2>
        {video &&
          <div className="preview-video">
            <ReactPlayer className="project-video"
              url={"/videos/video_ecommerce.flv"}
              width={"100%"}
              height={"100%"}
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
        }

        {previewImg && <div className="preview-img">

          <img src={previewImg} alt="preview-img" className='project-img' />

        </div>}
        <div onClick={() => openLink("code")} className="buttons">
          <button>Code Repo
            <FontAwesomeIcon icon={faGithub} className='btn-icon' />
          </button>
          <button onClick={() => openLink("demo")} >Live Demo
            <FontAwesomeIcon icon={faEye} className='btn-icon' />
          </button>
        </div>
        <div className="tech-stack">
          {techStack.map((el) => <div key={el} className="stackDiv">
            <span>{el}</span>
          </div>)}

        </div>
        <div className="description">
          {description}

        </div>


      </div>
    </div>
  )
}
