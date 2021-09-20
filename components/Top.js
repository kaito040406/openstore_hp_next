import * as THREE from 'three';
import Button from '@material-ui/core/Button';
import * as CANNON from 'cannon';
import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useCannon, Provider } from '../src/useCannon';

// 重要コード///////////////////////////////////////////////////////////////////

// import Button from '@material-ui/core/Button';
// import React, { useRef } from 'react';
// import * as THREE from 'three';
// import Kanit from './Kanit_Regular.json';
// import { Canvas } from 'react-three-fiber';

// function TextMesh({ args, position }) {
//   const mesh = useRef(null);

//   const font = new THREE.FontLoader().parse(Kanit);

//   const textOptions = {
//     font,
//     size: 3,
//     height: 2,
//     curveSegments: 32,
//     font-weight?
//     bevelEnabled: true,
//     奥行
//     bevelThickness: 0.05,
//     距離感
//     bevelSize: 0.1,
//     font-weight?
//     bevelOffset: 0.2,
//     font-weight?
//     bevelSegments: 5,
//   };
//   useFrame(() => (mesh.current.rotation.x += 0.01));
//   return (
//     <mesh castShadow receiveShadow position={position} ref={mesh}>
//       <textGeometry attach="geometry" args={[args, textOptions]} factor={0.3} />
//       <meshPhysicalMaterial
//         attach="material"
//         color="red"
//         よくわからん
//         roughness={0.5}
//         明るさ
//         metalness={0.1}
//       />
//     </mesh>
//   );
// }

{
  /* <group>
  <TextMesh args="W" position={[-13, 0, 0.2]} />
  <TextMesh args="E" position={[-7.5, 0, 0.2]} />
  <TextMesh args="L" position={[-3.5, 0, 0.2]} />
  <TextMesh args="C" position={[0, 0, 0.2]} />
  <TextMesh args="O" position={[4, 0, 0.2]} />
  <TextMesh args="M" position={[8.5, 0, 0.2]} />
  <TextMesh args="E" position={[13.5, 0, 0.2]} />
</group>; */
}
//////////////////////////////////////////////////////////////////////////////

// 地面のコード
const Plane = ({ position }) => {
  const ref = useCannon({ mass: 0 }, (body) => {
    body.addShape(new CANNON.Plane());
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" opacity="0" />
    </mesh>
  );
};

// 物体のコード

const TextMesh = ({ position, args }) => {
  const ref = useCannon({ mass: 100000 }, (body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
};

export default function Top() {
  return (
    <>
      <section className="top">
        <div className="top-container">
          <div className="top-left">
            <h1 className="top-heading">
              <span className="top-span">あなたの</span>
              <br />
              価値を
              <br />
              全ての場所に
            </h1>
            <p className="top-text">~ Branding your value everywhere ~</p>
            <Button className="top-btn" variant="contained" color="primary">
              ABOUT US
            </Button>
          </div>
          <div className="top-right">
            <Canvas camera={{ position: [0, 5, 15] }}>
              <ambientLight intensity={0.5} />
              <spotLight
                intensity={0.6}
                position={[30, 30, 50]}
                angle={0.2}
                penumbra={1}
                castShadow
              />
              <Provider>
                {/* 地面の呼び出し */}
                <Plane position={[0, 0, -5]} />
                {/* 物体の呼び出し */}
                <TextMesh position={[1, 0, 1]} args={[2, 2, 2]} />
                <TextMesh position={[1, 0, 1]} args={[1, 1, 5]} />
                <TextMesh position={[2, 1, 5]} args={[3, 3, 3]} />
                <TextMesh position={[0, 0, 6]} args={[2, 4, 2]} />
                <TextMesh position={[-1, 1, 8]} args={[2, 3, 2]} />
                <TextMesh position={[0, 2, 3]} args={[5, 5, 1]} />
                <TextMesh position={[2, -1, 13]} args={[1, 1, 10]} />
              </Provider>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
}
