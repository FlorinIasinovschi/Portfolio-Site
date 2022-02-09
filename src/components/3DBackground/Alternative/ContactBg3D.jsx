import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useHelper, PerspectiveCamera } from "@react-three/drei"
import { PointLightHelper, MathUtils } from 'three';
import Shape3D from '../Shape3D';





const Scene = (props) => {
  // const pointLight = useRef()


  return (
    <>
      {/* <color attach='background' args={["lightgrey"]} /> */}
      <ambientLight intensity={1} />
      {/* <directionalLight position={[2, .5, 1]} intensity={3} /> */}

      {/* CONTACT ME */}
      {/* WAVES */}
      {<Shape3D position={[0, 0, 0]} scale={[1, 1, 1]}
        color={"#21007a"} speed={0.000} rotation={[0, 0, 1.6]} shape="cylinder" mat={"wave"} />}
      {<Shape3D position={[0, 0, -1]} scale={[1, 1.5, 1]}
        color={"#270094"} speed={0.000} rotation={[0.1, 0, 1.6]} shape="cylinder" mat={"wave"} />}


      {/* {phoneWidth && <Shape3D position={[0, -1 * objYDistance - 13.4 - aspectRatio, 0]} scale={[.5, 1, 1]}
        color={"#21007a"} speed={0.000} rotation={[0, 0, 1.6]} shape="cylinder" mat={"wave"} />}
      {phoneWidth && <Shape3D position={[0, -1 * objYDistance - 13.4 - aspectRatio, -1]} scale={[.8, 1.5, 1]}
        color={"#270094"} speed={0.000} rotation={[0.1, 0, 1.6]} shape="cylinder" mat={"wave"} />} */}




      {/* <gridHelper args={[300, 300, 300]} /> */}

      {/* CONTACT */}
      <pointLight position={[0, 2, -1.2]} distance={7} intensity={5} color={"#ffffff"} />



    </>
  )

}





export default function ContactBg3D() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [cameraPhone, setcameraPhone] = useState(false)

  const fov = 35;
  const aspectRatio = 16 / 9;

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

    // camera={{ fov: 35, aspect: windowWidth / windowHeight, near: 0.1, far: 100, position: [0, -2 * scrolling, 6] }}
    >
      <color attach="background" args={["lightgrey"]} />
      <PerspectiveCamera fov={35} aspect={windowWidth / windowHeight} near={0.1} far={100} position={[0, 0, 6]} makeDefault={!cameraPhone} />
      <PerspectiveCamera fov={35} aspect={windowWidth / windowHeight} near={0.1} far={100} position={[0, 0, 5]} makeDefault={cameraPhone} />
      <Scene phoneWidth={cameraPhone} />
    </Canvas>

  )
}
