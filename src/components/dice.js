/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import './dice.css';
import React, { useState } from 'react';

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
        roughness={[0.1]}
        metalness={[0.5]}
        color = 'white'
      />
    </mesh>
  );
}

function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}
  
function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}

function Planes() {
  return (
    <>
      <mesh
        receiveShadow
        position={[0, -2, 0]}
        rotation={[4.7, 0, 0]}>
        <planeGeometry args={[55, 55]} />
        <meshStandardMaterial color='grey' />
      </mesh>
      <mesh
        receiveShadow
        position={[0, -2, 0]}
      >
        <planeGeometry args={[55, 55]} />
        <meshStandardMaterial color='grey' />
      </mesh>
    </>
  );
}

export default function Dice() {
  const [light, setLight] = useState(true);
  return (
    <div className='dice-div'>
      <Canvas>
        {light && <KeyLight brightness={5.6} color={'#ffc9f9'} />}
        <FillLight brightness={2.6} color={'#bdefff'} />
        <RimLight brightness={54} color={'#fff'} />
        <Icosahedron />
        <Planes />
      </Canvas>
    </div>
  );
}