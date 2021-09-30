import * as THREE from 'three';
import Button from '@material-ui/core/Button';
import * as CANNON from 'cannon';
import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useCannon, Provider } from '../src/useCannon';
import Kanit from './Kanit_Regular.json';

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
</group> */
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
      <planeBufferGeometry attach="geometry" args={[1000, 4000]} />
      <meshPhongMaterial attach="material" opacity="0" />
    </mesh>
  );
};

// 物体のコード

const TextMesh = ({ position, args }) => {
  const mesh = useRef(null);

  const font = new THREE.FontLoader().parse(Kanit);

  const textOptions = {
    font,
    size: 9,
    height: 2,
    curveSegments: 32,
    // font-weight?
    bevelEnabled: true,
    // 奥行
    bevelThickness: 0.05,
    // 距離感
    bevelSize: 0.1,
    // font-weight?
    bevelOffset: 0.2,
    // font-weight?
    bevelSegments: 8,
  };

  // CANNON.jsを使うためのコード
  const ref = useCannon({ mass: 100000 }, (body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(2, 3, 3)));
    body.position.set(...position);
  });
  return (
    <mesh castShadow receiveShadow position={position} ref={(mesh, ref)}>
      <textGeometry attach="geometry" args={[args, textOptions]} factor={0.3} />
      <meshPhysicalMaterial
        attach="material"
        color="#22B2FC"
        // よくわからん
        roughness={0.5}
        // 明るさ
        metalness={0.01}
      />
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
                position={[90, 90, 90]}
                angle={0.2}
                penumbra={1}
              />
              <Provider>
                {/* 地面の呼び出し */}
                <Plane position={[0, 0, -14]} />
                {/* 物体の呼び出し */}
                <TextMesh args="O" position={[-31, 0, -1]} />
                <TextMesh args="P" position={[-27, 0.5, 2]} />
                <TextMesh args="E" position={[-26, 0, 5]} />
                <TextMesh args="N" position={[-11, -0.5, 7]} />
                <TextMesh args="S" position={[-3, 0.5, 9]} />
                <TextMesh args="T" position={[4, 1.5, 11]} />
                <TextMesh args="O" position={[10, 1, 13]} />
                <TextMesh args="R" position={[18, -0.5, 15]} />
                <TextMesh args="E" position={[27, 0, 17]} />
              </Provider>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
}
