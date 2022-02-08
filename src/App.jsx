import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { techStackProject1, techStackProject2, descriptionProject1, descriptionProject2 } from "./components/data/projectsData";
import './app.scss';
import Background3D from "./components/3DBackground/Background3D";
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScrollPercentage } from 'react-scroll-percentage'


const ecommerceVideo = "/videos/video_ecommerce.mp4"
const ecommerceURL = "https://florinecommerce.com/"
const ecommerceCodeURL = "https://github.com/FlorinIasinovschi/e-commerce-site"

const travelguideVideo = "/videos/video_travel_guide.mp4"
const travelguideURL = "https://travelguidegeo.netlify.app/"
const travelguideCodeURL = "https://github.com/FlorinIasinovschi/travel-guide"


function App() {

  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  })

  const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   const onScroll = () => setScroll(window.scrollY)
  //   window.removeEventListener('scroll', onScroll);
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [scroll])
  const handleScroll = (e) => {
    setScroll(e.target.scrollTop);
    //console.log(scroll);

  }

  return (

    <div className="app">
      <div className='webgl-background' >
        <Background3D scrolling={scroll} />
      </div >

      < Topbar />
      <div className="sections" ref={ref} onScroll={handleScroll}>
        <Intro className="section-intro" />

        <Projects title="E-commerce Site" techStack={techStackProject1} description={descriptionProject1}
          video={ecommerceVideo} urlDemo={ecommerceURL} urlCode={ecommerceCodeURL} />

        <Projects title="Travel Guide" techStack={techStackProject2} description={descriptionProject2} video={travelguideVideo}
          urlDemo={travelguideURL} urlCode={travelguideCodeURL} />
        <Skills />
        <About />
        <Contact />
      </div>

    </div >


  );
}

export default App;
