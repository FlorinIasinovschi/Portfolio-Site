import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Shape3D from './Shape3D';
import { useHelper } from "@react-three/drei"
import { PointLightHelper } from 'three';





const Scene = () => {
  const pointLight = useRef()
  const objYDistance = 3;
  const sortingVisualizerDist = 2;
  const unsortedColor = "#330091"
  const sortedColor = "#008a73"

  useHelper(pointLight, PointLightHelper, 1, "hotpink")



  return (
    <>
      {/* <color attach='background' args={["lightgrey"]} /> */}
      <ambientLight intensity={1} />
      {/* <directionalLight position={[2, .5, 1]} intensity={3} /> */}

      {/* INTRO */}
      <Shape3D position={[-1.1, 0 * objYDistance, 0]} rotAxis="y" scale={[.35, .35, .35]} color={"#280068"}
        speed={0.004} rotation={[-.5, 0, 0]} shape="torusKnot" radius={[50]} mat={"standard"} />

      {/* PROJECTS */}
      <Shape3D position={[-4, -1 * objYDistance, -2]} rotAxis="y" scale={[0.3, .7, 0.3]}
        color={sortedColor} speed={0.007} rotation={[0, 0, -0.3]} shape="cone" mat={"normal"} />
      <Shape3D position={[3.5, -1 * objYDistance + 1, -1]} rotAxis="x" scale={[0.5, 0.5, 0.5]}
        color={sortedColor} speed={0.003} rotation={[0.5, 10, 10]} shape="dodecahedron" mat={"normal"} />


      {/* SORTING VISUALIZER */}
      {/* LEFT */}
      <Shape3D position={[-2, -1 * objYDistance - sortingVisualizerDist, 0.7]} rotAxis="y" scale={[2, .1, 0.3]}
        color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[-2, -1 * objYDistance - sortingVisualizerDist - 0.13, 0.7]} rotAxis="y" scale={[1, .1, 0.3]}
        color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[-2, -1 * objYDistance - sortingVisualizerDist - 0.26, 0.7]} rotAxis="y" scale={[1.4, .1, 0.3]}
        color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[-2, -1 * objYDistance - sortingVisualizerDist - 0.39, 0.7]} rotAxis="y" scale={[2.3, .1, 0.3]}
        color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[-1.5, -1 * objYDistance - sortingVisualizerDist - 0.52, 0.7]} rotAxis="y" scale={[.8, .1, 0.3]}
        color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[-2, -1 * objYDistance - sortingVisualizerDist - 0.65, 0.7]} rotAxis="y" scale={[0.9, .1, 0.3]}
        color={unsortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      {/* RIGHT */}
      <Shape3D position={[2, -1 * objYDistance - sortingVisualizerDist, 0.7]} rotAxis="y" scale={[2.3, .1, 0.3]}
        color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[2, -1 * objYDistance - sortingVisualizerDist - 0.13, 0.7]} rotAxis="y" scale={[2, .1, 0.3]}
        color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[2, -1 * objYDistance - sortingVisualizerDist - 0.26, 0.7]} rotAxis="y" scale={[1.4, .1, 0.3]}
        color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[2, -1 * objYDistance - sortingVisualizerDist - 0.39, 0.7]} rotAxis="y" scale={[1, .1, 0.3]}
        color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[2, -1 * objYDistance - sortingVisualizerDist - 0.52, 0.7]} rotAxis="y" scale={[.9, .1, 0.3]}
        color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />
      <Shape3D position={[1.5, -1 * objYDistance - sortingVisualizerDist - 0.65, 0.7]} rotAxis="y" scale={[0.8, .1, 0.3]}
        color={sortedColor} speed={0.00} rotation={[0, 0, 0]} shape="box" mat={"standard"} />


      {/* SKILLS */}



      {/* ABOUT ME */}
      <Shape3D position={[4, -1 * objYDistance - 8.4, -0.2]} scale={[0.5, 0.5, 0.5]}
        color={"#00aa80"} speed={0.000} rotation={[0, 0, 0]} shape="torus" mat={"standard"} />
      <Shape3D position={[-4, -1 * objYDistance - 8.4, -0.2]} scale={[0.5, 0.5, 0.5]}
        color={"#00aa80"} speed={0.000} rotation={[0, 0, 0]} shape="torus" mat={"standard"} />

      {/* CONTACT ME */}
      {/* WAVES */}
      <Shape3D position={[0, -1 * objYDistance - 13.4, 0]} scale={[1, 1, 1]}
        color={"#21007a"} speed={0.000} rotation={[0, 0, 1.6]} shape="cylinder" mat={"wave"} wave />
      <Shape3D position={[0, -1 * objYDistance - 13.4, -1]} scale={[1, 1.5, 1]}
        color={"#270094"} speed={0.000} rotation={[0.1, 0, 1.6]} shape="cylinder" mat={"wave"} wave />

      {/* SIGN */}
      {/* <Shape3D position={[-2, -1 * objYDistance - 13, -0.5]} scale={[.2, 5.2, .2]}
        color={"#c52700"} speed={0.000} rotation={[0, -0.3, 0]} shape="box" mat={"wood"} /> */}



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

      {/* CONTACT */}
      <pointLight position={[0, -1 * objYDistance - 10.2, -1.2]} distance={7} intensity={5} color={"#ffffff"} />



    </>
  )

}





export default function Background3D({ scrolling }) {

  const objYDistance = 3;


  function Dolly() {
    // This one makes the camera move with the scrolls
    useFrame(({ camera }) => {
      camera.position.y = - scrolling / window.innerHeight * objYDistance;
    })
    return null
  }


  return (
    <Canvas
      camera={{ fov: 35, aspect: 16 / 9, near: 0.1, far: 100, position: [0, -2 * scrolling, 6] }}
    >
      <Dolly />
      <Scene />
    </Canvas>

  )
}
