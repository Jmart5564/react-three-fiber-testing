/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import './dice.css';
import React from 'react';

function Icosahedron(props) {
  const Mesh = React.useRef();
    
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    Mesh.current.rotation.x = a * 1.1;
    Mesh.current.rotation.z = a * 1.1;
  });

  return (
    <mesh
      {...props}
      ref={Mesh}>
      <icosahedronGeometry args={[1]} />
      <meshStandardMaterial
        roughness={[0]}
        metalness={[0.3]}
        color = 'green'
      />
    </mesh>
  );
}

function Planes() {
  return (
    <><mesh
      position={[0, -2, 0]}
      rotation={[4.7, 0, 0]}>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color='grey' />
    </mesh>
    <mesh
      position={[0, -2, 0]}
    //   rotation={[4.7, 0, 0]}
    >
      <planeGeometry args={[6, 9]} />
      <meshStandardMaterial color='grey' />
    </mesh></>
  );
}

export default function Dice() {
  return (
    <div className='dice-div'>
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight
          color="white" 
          position={[0, 5, 5]}
          rotation={[4.7, 0, 0]} 
        />
        <Icosahedron />
        <Planes />
      </Canvas>
    </div>
  );
}