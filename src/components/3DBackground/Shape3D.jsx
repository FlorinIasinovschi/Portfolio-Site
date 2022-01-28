import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, MeshWobbleMaterial, RoundedBox } from '@react-three/drei';




export default function Shape3D(props) {

  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  let axis = props.rotAxis;
  let rotSpeed = props.speed;
  let shape = props.shape;
  let mat = props.mat;
  let wave = props.wave;

  useFrame((state, delta) => axis === 'x' ? (mesh.current.rotation.x += rotSpeed) :
    axis === 'y' ? (mesh.current.rotation.y += rotSpeed) :
      (mesh.current.rotation.z += rotSpeed));

  useFrame(() => wave && (console.log(mesh.current.attribute)));

  // useEffect(() => {
  //   document.body.style.cursor = hovered ? 'pointer' : 'auto'
  // }, [hovered])

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={props.scale}
      rotation={props.rotation}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      {shape === "torusKnot" && <torusKnotGeometry args={[1.5, .4, 150, 40, 2, 3]} />}
      {shape === "box" && <boxGeometry args={[1, 1, 1]} />}
      {shape === "roundedbox" && <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={3} color={"#dd5757"} />}
      {shape === "sphere" && <sphereGeometry args={[2, 150, 150]} />}
      {shape === "cylinder" && <cylinderGeometry args={[1, 1, 10, 60, 150]} />}
      {shape === "plane" && <planeGeometry wire={true} args={[1, 1, 20, 20]} />}
      {shape === "cone" && <coneGeometry />}
      {shape === "dodecahedron" && <dodecahedronGeometry />}
      {shape === "torus" && <torusGeometry args={[2.8, .4, 50, 80]} />}


      {mat === "standard" && <meshStandardMaterial roughness={.7} color={props.color} />}
      {mat === "wood" && <meshStandardMaterial roughness={.7} color={props.color} />}
      {mat === "normal" && <meshNormalMaterial color={props.color} />}
      {mat === "wave" && <MeshDistortMaterial attach="material" speed={.5} distort={0.5} roughness={1} color={props.color} />}
      {/* <directionalLightHelper args={[light, 1]} /> */}

    </mesh>
  )
}






















