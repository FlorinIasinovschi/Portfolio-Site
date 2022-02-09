import { useState, useEffect } from 'react';
import { Canvas, useThree, } from '@react-three/fiber';
import { PerspectiveCamera } from "@react-three/drei";
import { MathUtils } from 'three';
import Shape3D from '../Shape3D';


const Scene = (props) => {
  const cameraPhone = props.cameraPhone
  const unsortedColor = "#330091"
  const sortedColor = "#006352"
  const objYDistance = 1
  const sortingPosX = 4

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  return (
    <>
      <ambientLight intensity={1} />


      {/* LEFT */}
      {windowWidth > 820 && <><Shape3D position={[-sortingPosX, objYDistance, 0.7]} rotAxis="y" scale={[2, .1, 0.3]}
        color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX, objYDistance - 0.13, 0.7]} rotAxis="y" scale={[1, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX, objYDistance - 0.26, 0.7]} rotAxis="y" scale={[1.4, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX, objYDistance - 0.39, 0.7]} rotAxis="y" scale={[2.3, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX + 0.2, objYDistance - - 0.52, 0.7]} rotAxis="y" scale={[.6, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[-sortingPosX, objYDistance - 0.65, 0.7]} rotAxis="y" scale={[0.9, .1, 0.3]}
          color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} /></>}
      {/* RIGHT */}
      {windowWidth > 820 && <><Shape3D position={[+ sortingPosX, objYDistance, 0.7]} rotAxis="y" scale={[2.3, .1, 0.3]}
        color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX, objYDistance - 0.13, 0.7]} rotAxis="y" scale={[2, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX, objYDistance - 0.26, 0.7]} rotAxis="y" scale={[1.4, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX, objYDistance - 0.39, 0.7]} rotAxis="y" scale={[1, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX - 0.1, objYDistance - 0.52, 0.7]} rotAxis="y" scale={[.9, .1, 0.3]}
          color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
        <Shape3D position={[+sortingPosX - 0.2, objYDistance - 0.65, 0.7]} rotAxis="y" scale={[0.6, .1, 0.3]} /></>}

      {/* TOP */}
      <pointLight position={[0, 3, -1]} distance={8} intensity={5} color={"#ffffff"} />
      {/* FRONT */}
      <pointLight position={[0, 0.7, 3]} distance={9} intensity={7} color={"#ffffff"} />
      {/* BOTTOM */}
      <pointLight position={[0, 0, -1]} distance={8} intensity={1} color={"#ffffff"} />

    </>
  )

}

export default function SortingBars3D() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [cameraPhone, setcameraPhone] = useState(false)
  const fov = 35;
  const aspectRatio = 16 / 9;

  function Dolly() {
    const { camera } = useThree()

    useEffect(() => {

      const handleResize = () => {

        if (camera.aspect < aspectRatio && !cameraPhone) {



          // window too large
          // const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
          // const ratio = camera.aspect / aspectRatio;
          // const newCameraHeight = cameraHeight / ratio;
          // camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
          // console.log("FOV : " + camera.fov)


          // window too narrow

          // const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
          // const ratio = camera.aspect / aspectRatio;
          // const newCameraHeight = cameraHeight / ratio;
          // camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 1.3;
          console.log("FOV : " + camera.fov)


          console.log(window.innerWidth)
        }
      }
      handleResize()
      window.addEventListener('resize', handleResize)

    }, [])

    return null;
  }

  useEffect(() => {
    const handleWindowWidth = () => {

      if (window.innerWidth <= 500) {
        setcameraPhone(true)
        console.log("phone");
      }
      else {
        setcameraPhone(false)
        console.log("nophone");

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
      <Scene cameraPhone={cameraPhone} />
      <Dolly />
    </Canvas>

  )
}
