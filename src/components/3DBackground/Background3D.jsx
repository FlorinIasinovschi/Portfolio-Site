import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Shape3D from './Shape3D';
import { useHelper, PerspectiveCamera } from "@react-three/drei"
import { PointLightHelper, MathUtils } from 'three';





const Scene = (props) => {
  // const pointLight = useRef()
  const objYDistance = 3;
  const unsortedColor = "#330091"
  const sortedColor = "#006352"
  const phoneWidth = props.phoneWidth

  // useHelper(pointLight, PointLightHelper, 1, "hotpink")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [aspectRatio, setaspectRatio] = useState(window.innerWidth / window.innerHeight)
  const [sortingPosX, setsortingPosX] = useState(2)
  const [dynamicY, setDynamicY] = useState(0)
  const [sortingVisualizerDist, setsortingVisualizerDist] = useState(2)



  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth)
      setaspectRatio(window.innerWidth / window.innerHeight)
      console.log("width : " + window.innerWidth + "height : " + window.innerHeight)
      console.log(aspectRatio)
      setsortingPosX(window.innerWidth / window.innerHeight)

      //TO CHANGE POSITION OF 3D OBJECTS WHEN THE WIDTH IS SMALL
      // setwindowFactor(window.innerWidth / 100)
      // console.log(windowFactor)
      if (phoneWidth) {
        console.log("phoneWidth")
        setDynamicY(aspectRatio * (window.innerHeight / 3) * 0.01)

      }




      if (aspectRatio < 1.7 && window.innerWidth >= 1920) {
        setDynamicY(aspectRatio - 1.1)
        setsortingVisualizerDist(1.8)
        console.log("small ratio");
      }


      // HANDLING LAPTOP MONITORS / TABLETS / SMALLS SCREENS
      if (window.innerWidth < 1921 && !phoneWidth) {
        setsortingPosX(window.innerWidth / 1150)

        //FOR SORTING BARS
        if (window.innerWidth < 1920) {
          setsortingPosX(window.innerWidth / window.innerHeight)
        }



        if (window.innerHeight >= 720 && window.innerHeight <= 800) {
          setDynamicY(1.2)
          // setDynamicY(aspectRatio)
          setsortingVisualizerDist(1.6)
        }
        //FOR WIDE RATIOS
        if (aspectRatio > 1.8) {
          setDynamicY(0.4 + aspectRatio)
          setsortingVisualizerDist(1.2)

        }


        if (window.innerHeight >= 600 && window.innerHeight < 720) {
          setDynamicY(2.7)
          setsortingVisualizerDist(1)
        }
      }
    }
    handleWindowWidth()

    window.addEventListener('resize', handleWindowWidth)
  }, [windowWidth])



  return (
    <>
      {/* <color attach='background' args={["lightgrey"]} /> */}
      <ambientLight intensity={1} />
      {/* <directionalLight position={[2, .5, 1]} intensity={3} /> */}

      {/* INTRO */}
      {!phoneWidth && <Shape3D position={[-1.1, 0 * objYDistance, 0]} rotAxis="y" scale={[.35, .35, .35]} color={"#280068"}
        speed={0.004} rotation={[-.5, 0, 0]} shape="torusKnot" radius={[50]} mat={"standard"} />}

      {phoneWidth && <Shape3D position={[0, 0 * objYDistance + .2, 0]} rotAxis="y" scale={[.25, .25, .25]} color={"#280068"}
        speed={0.004} rotation={[-.5, 0, 0]} shape="torusKnot" radius={[50]} mat={"standard"} />}

      {/* PROJECT 1 */}
      <Shape3D position={[-4, -1 * objYDistance, -2]} rotAxis="y" scale={[0.3, .7, 0.3]}
        color={sortedColor} speed={0.007} rotation={[0, 0, -0.3]} shape="cone" mat={"normal"} />
      <Shape3D position={[3.5, -1 * objYDistance + 1, -1]} rotAxis="x" scale={[0.5, 0.5, 0.5]}
        color={sortedColor} speed={0.003} rotation={[0.5, 10, 10]} shape="dodecahedron" mat={"normal"} />


      {/* PROJECT 2 */}
      <Shape3D position={[-3.5, -1.8 * objYDistance, -2]} rotAxis="y" scale={[0.5, .5, 0.5]}
        color={sortedColor} speed={0.005} rotation={[0.1, 0, 0.2]} shape="box" mat={"standard"} />
      <Shape3D position={[3, -1.8 * objYDistance, -1]} rotAxis="y" scale={[0.4, 0.7, 0.4]}
        color={sortedColor} speed={0.003} rotation={[0.25, 0.1, 0]} shape="octahedron" mat={"normal"} />


      {/* <gridHelper args={[300, 300, 300]} /> */}

      {/* INTRO LIGHTS */}
      {/* FRONT */}
      <pointLight position={[1, 20, 10]} distance={30} intensity={10} color={"#ffffff"} />
      {/* DOWN */}
      <pointLight position={[0, -2, 0]} distance={15} intensity={4} color={"#00ffff"} />
      {/* RIM */}
      <pointLight position={[1, 15, -30]} distance={50} intensity={6} color={"#ffffff"} />
      {/* FRONT LEFT */}
      <pointLight position={[-5, 15, 10]} distance={25} intensity={12} color={"#ffffff"} />

      {/* ABOUT LIGTHS */}
      {/* INTERNAL RIM */}
      <pointLight position={[-4, -1 * objYDistance - 8.4, -1.2]} distance={7} intensity={5} color={"#ffffff"} />
      <pointLight position={[4, -1 * objYDistance - 8.4, -1.2]} distance={7} intensity={5} color={"#ffffff"} />

      {/* SKILLS */}
      <pointLight position={[0, -1 * objYDistance - 3 - dynamicY, 2]} distance={5} intensity={7} color={"#ffffff"} />

      {/* CONTACT */}
      <pointLight position={[0, -1 * objYDistance - 10.2 - dynamicY, -1.2]} distance={7} intensity={5} color={"#ffffff"} />



    </>
  )

}





export default function Background3D({ scrolling }) {




  const objYDistance = 3;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [cameraPhone, setcameraPhone] = useState(false)

  const fov = 35;
  const aspectRatio = 16 / 9;

  useEffect(() => {
    const handleWindowWidth = () => {

      if (window.innerWidth <= 425) {
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



  function Dolly() {

    const { camera } = useThree()


    // This one makes the camera move with the scrolls
    useFrame(({ camera }) => {
      camera.position.y = - scrolling / window.innerHeight * objYDistance;
    })
    return null
  }


  return (
    <Canvas

    // camera={{ fov: 35, aspect: windowWidth / windowHeight, near: 0.1, far: 100, position: [0, -2 * scrolling, 6] }}
    >
      <PerspectiveCamera fov={35} aspect={windowWidth / windowHeight} near={0.1} far={100} position={[0, -2 * scrolling, 6]} makeDefault={!cameraPhone} />
      <PerspectiveCamera fov={35} aspect={windowWidth / windowHeight} near={0.1} far={100} position={[0, -2 * scrolling, 5]} makeDefault={cameraPhone} />
      <Dolly />
      <Scene phoneWidth={cameraPhone} />
    </Canvas>

  )
}
