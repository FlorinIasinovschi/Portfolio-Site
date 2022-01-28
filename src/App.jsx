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


const adminImg = "/videos/video_ecommerce.flv"
const ecommerceVideo = "/images/projects_previews/admin_dashboard.jpg"
const sortingImg = "/images/projects_previews/sorting_visualizer.jpeg"

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
          video={ecommerceVideo} urlDemo="https://florinecommerce.com/" urlCode="https://github.com/FlorinIasinovschi/e-commerce-site" />
        <Projects title="Sorting Visualizer" techStack={techStackProject2} description={descriptionProject2} previewImg={sortingImg} />
        <Skills />
        <About />
        <Contact />
      </div>

    </div >


  );
}

export default App;
