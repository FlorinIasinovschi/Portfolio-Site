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
  const [windowFactor, setwindowFactor] = useState(0)
  const [dynamicY, setDynamicY] = useState(0)
  const [sortingVisualizerDist, setsortingVisualizerDist] = useState(2)



  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth)
      setaspectRatio(window.innerWidth / window.innerHeight)
      console.log("width : " + window.innerWidth + "height : " + window.innerHeight)
      console.log(aspectRatio)

      //TO CHANGE POSITION OF 3D OBJECTS WHEN THE WIDTH IS SMALL
      // setwindowFactor(window.innerWidth / 100)
      // console.log(windowFactor)
      if (phoneWidth) {
        console.log("phoneWidth")
        setDynamicY(1.1)

      }

      if (window.innerWidth < 1921 && !phoneWidth) {
        setsortingPosX(window.innerWidth / 1150)
        if (window.innerWidth < 1920) {
          setsortingPosX(window.innerWidth / window.innerHeight)
        }

        if (window.innerHeight >= 720) {
          setDynamicY(1.2)
          setsortingVisualizerDist(1.6)
        }
        if (window.innerHeight >= 600 && window.innerWidth < 720) {
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

      {/* PROJECTS */}
      <Shape3D position={[-4, -1 * objYDistance, -2]} rotAxis="y" scale={[0.3, .7, 0.3]}
        color={sortedColor} speed={0.007} rotation={[0, 0, -0.3]} shape="cone" mat={"normal"} />
      <Shape3D position={[3.5, -1 * objYDistance + 1, -1]} rotAxis="x" scale={[0.5, 0.5, 0.5]}
        color={sortedColor} speed={0.003} rotation={[0.5, 10, 10]} shape="dodecahedron" mat={"normal"} />


      {/* SORTING VISUALIZER */}
      {/* LEFT */}
      {windowWidth > 820 && <><Shape3D position={[-sortingPosX, -1 * objYDistance - sortingVisualizerDist - dynamicY, 0.7]} rotAxis="y" scale={[2, .1, 0.3]}
        color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX, -1 * objYDistance - sortingVisualizerDist - 0.13 - dynamicY, 0.7]} rotAxis="y" scale={[1, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX, -1 * objYDistance - sortingVisualizerDist - 0.26 - dynamicY, 0.7]} rotAxis="y" scale={[1.4, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX, -1 * objYDistance - sortingVisualizerDist - 0.39 - dynamicY, 0.7]} rotAxis="y" scale={[2.3, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX + 0.2, -1 * objYDistance - sortingVisualizerDist - 0.52 - dynamicY, 0.7]} rotAxis="y" scale={[.6, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX, -1 * objYDistance - sortingVisualizerDist - 0.65 - dynamicY, 0.7]} rotAxis="y" scale={[0.9, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} /></>}
      {/* RIGHT */}
      {windowWidth > 820 && <><Shape3D position={[+sortingPosX, -1 * objYDistance - sortingVisualizerDist - dynamicY, 0.7]} rotAxis="y" scale={[2.3, .1, 0.3]}
        color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX, -1 * objYDistance - sortingVisualizerDist - 0.13 - dynamicY, 0.7]} rotAxis="y" scale={[2, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX, -1 * objYDistance - sortingVisualizerDist - 0.26 - dynamicY, 0.7]} rotAxis="y" scale={[1.4, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX, -1 * objYDistance - sortingVisualizerDist - 0.39 - dynamicY, 0.7]} rotAxis="y" scale={[1, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX - 0.1, -1 * objYDistance - sortingVisualizerDist - 0.52 - dynamicY, 0.7]} rotAxis="y" scale={[.9, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX - 0.2, -1 * objYDistance - sortingVisualizerDist - 0.65 - dynamicY, 0.7]} rotAxis="y" scale={[0.6, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} /> </>}


      {/* SKILLS */}
      {!phoneWidth && <Shape3D position={[0, -1 * objYDistance - 4.7 - dynamicY, 1]} scale={[.15, 1.2, .2]}
        color={"#2f00af"} speed={0.000} rotation={[0, 0, 1.57]} shape="cylinder" mat={"wave"} />}

      {phoneWidth && <Shape3D position={[0, -1 * objYDistance - 4.3 + windowFactor - dynamicY, 0]} scale={[.15, 1.2, .2]}
        color={"#2f00af"} speed={0.000} rotation={[0, 0, 1.57]} shape="cylinder" mat={"wave"} />}


      {/* ABOUT ME */}
      <Shape3D position={[4, -1 * objYDistance - 8.4 - dynamicY, -0.2]} scale={[0.5, 0.5, 0.5]}
        color={"#00aa80"} speed={0.000} rotation={[0, 0, 0]} shape="torus" mat={"standard"} />
      <Shape3D position={[-4, -1 * objYDistance - 8.4 - dynamicY, -0.2]} scale={[0.5, 0.5, 0.5]}
        color={"#00aa80"} speed={0.000} rotation={[0, 0, 0]} shape="torus" mat={"standard"} />

      {/* CONTACT ME */}
      {/* WAVES */}
      {<Shape3D position={[0, -1 * objYDistance - 13.4 - dynamicY, 0]} scale={[1, 1, 1]}
        color={"#21007a"} speed={0.000} rotation={[0, 0, 1.6]} shape="cylinder" mat={"wave"} />}
      {<Shape3D position={[0, -1 * objYDistance - 13.4 - dynamicY, -1]} scale={[1, 1.5, 1]}
        color={"#270094"} speed={0.000} rotation={[0.1, 0, 1.6]} shape="cylinder" mat={"wave"} />}


      {/* {phoneWidth && <Shape3D position={[0, -1 * objYDistance - 13.4 - aspectRatio, 0]} scale={[.5, 1, 1]}
        color={"#21007a"} speed={0.000} rotation={[0, 0, 1.6]} shape="cylinder" mat={"wave"} />}
      {phoneWidth && <Shape3D position={[0, -1 * objYDistance - 13.4 - aspectRatio, -1]} scale={[.8, 1.5, 1]}
        color={"#270094"} speed={0.000} rotation={[0.1, 0, 1.6]} shape="cylinder" mat={"wave"} />} */}




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
      <pointLight position={[0, -1 * objYDistance - 3, 2]} distance={5} intensity={7} color={"#ffffff"} />

      {/* CONTACT */}
      <pointLight position={[0, -1 * objYDistance - 10.2, -1.2]} distance={7} intensity={5} color={"#ffffff"} />



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

      if (window.innerWidth <= 500) {
        setcameraPhone(true)
        console.log("small");
      }
      else {
        setcameraPhone(false)
        console.log("big");

      }
    }
    handleWindowWidth()

    window.addEventListener('resize', handleWindowWidth)
  }, [])



  function Dolly() {

    const { camera } = useThree()


    // useEffect(() => {
    //   // camera.fov = 100

    //   const handleResize = () => {

    //     if (window.innerWidth > 1000) {



    //         // window too large
    //         const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
    //         const ratio = camera.aspect / aspectRatio;
    //         const newCameraHeight = cameraHeight / ratio;
    //         camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;


    //         // window too narrow

    //         // const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
    //         // const ratio = camera.aspect / aspectRatio;
    //         // const newCameraHeight = cameraHeight / ratio;
    //         // camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;


    //       console.log(window.innerWidth)
    //     }
    //   }
    //   window.addEventListener('resize', handleResize)
    // })

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
      <PerspectiveCamera fov={35} aspect={16 / 9} near={0.1} far={100} position={[0, -2 * scrolling, 6]} makeDefault={!cameraPhone} />
      <PerspectiveCamera fov={35} aspect={windowWidth / windowHeight} near={0.1} far={100} position={[0, -2 * scrolling, 5]} makeDefault={cameraPhone} />
      <Dolly />
      <Scene phoneWidth={cameraPhone} />
    </Canvas>

  )
}
