import { useState, useEffect } from 'react';
import { Canvas, } from '@react-three/fiber';
import { PerspectiveCamera } from "@react-three/drei"
import Shape3D from '../Shape3D';


const Scene = () => {
  const color = "#008665"

  return (
    <>
      <ambientLight intensity={1} />

      {/* ABOUT ME */}
      <Shape3D position={[4, 0, -0.2]} scale={[0.5, 0.5, 0.5]}
        color={color} speed={0.000} rotation={[0, 0, 0]} shape="torus" mat={"standard"} />
      <Shape3D position={[-4, 0, -0.2]} scale={[0.5, 0.5, 0.5]}
        color={color} speed={0.000} rotation={[0, 0, 0]} shape="torus" mat={"standard"} />

      {/* TOP */}
      <pointLight position={[0, 3, 2]} distance={7} intensity={3} color={"#ffffff"} />
      {/* BACK */}
      <pointLight position={[0, 0, -2.5]} distance={7} intensity={5} color={"#ffffff"} />
      {/* FRONT */}
      <pointLight position={[0, 0, 1.5]} distance={8} intensity={4} color={"#ffffff"} />

      {/* INTERNAL RIM */}
      <pointLight position={[-4, 0, -1.2]} distance={7} intensity={5} color={"#ffffff"} />
      <pointLight position={[4, 0, -1.2]} distance={7} intensity={5} color={"#ffffff"} />
    </>
  )

}

export default function AboutBg3D() {


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
