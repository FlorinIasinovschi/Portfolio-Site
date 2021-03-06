import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from "@react-three/drei"
import Shape3D from '../Shape3D';


const Scene = (props) => {

  return (
    <>
      <ambientLight intensity={1} />

      {/* CONTACT ME */}
      {/* WAVES */}
      {<Shape3D position={[0, -2.5, 0]} scale={[1, 1, 1]}
        color={"#21007a"} speed={0.000} rotation={[0, 0, 1.6]} shape="cylinder" mat={"wave"} waveSpeed={0.5} waveDistort={0.5} />}
      {<Shape3D position={[0, -2.4, -1]} scale={[1, 1.5, 1]}
        color={"#270094"} speed={0.000} rotation={[0.1, 0, 1.6]} shape="cylinder" mat={"wave"} waveSpeed={0.45} waveDistort={0.45} />}

      {/* CONTACT */}
      <pointLight position={[0, 1.5, -1]} distance={15} intensity={8} color={"#ffffff"} />

    </>
  )
}


export default function ContactBg3D() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [cameraPhone, setcameraPhone] = useState(false)

  useEffect(() => {
    const handleWindowWidth = () => {

      if (window.innerWidth <= 500) {
        setcameraPhone(true)
        // console.log("phone");
      }
      else {
        setcameraPhone(false)
        // console.log("nophone");

      }
    }
    handleWindowWidth()

    window.addEventListener('resize', handleWindowWidth)
  }, [])
  return (
    <Canvas

    >
      {/* <color attach="background" args={["lightgrey"]} /> */}
      <PerspectiveCamera fov={35} aspect={windowWidth / windowHeight} near={0.1} far={100} position={[0, 0, 6]} makeDefault={!cameraPhone} />
      <PerspectiveCamera fov={35} aspect={windowWidth / windowHeight} near={0.1} far={100} position={[0, 0, 5]} makeDefault={cameraPhone} />
      <Scene phoneWidth={cameraPhone} />
    </Canvas>

  )
}
