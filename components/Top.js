import Button from '@material-ui/core/Button';
import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
// import * as CANNON from 'cannon';
// import React, { useEffect, useState } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
// import { useCannon, Provider } from '../src/useCannon';
// import bold from '../resources/bold.blob';

// 無限に落ちるのを防ぐための平面のコード

// const Plane = ({ position }) => {
//   const ref = useCannon({ mass: 0 }, (body) => {
//     body.addShape(new CANNON.Plane());
//     body.position.set(...position);
//   });
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
//       <meshPhongMaterial attach="material" opacity={0} />
//     </mesh>
//   );
// };

// 落ちていく物体のコード

// const Box = ({ position, args }) => {
//   const ref = useCannon({ mass: 100000 }, (body) => {
//     body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
//     body.position.set(...position);
//   });
//   return (
//     <mesh ref={ref} castShadow receiveShadow>
//       <boxGeometry attach="geometry" args={args} />
//       <meshStandardMaterial attach="material" />
//     </mesh>
//   );
// };

function Text({}) {
  // const font = THREE.FontLoader;
  // const config = useMemo(
  //   () => ({
  //     font,
  //     size: 30,
  //   }),
  //   [font]
  // );
  // const mesh = useRef([st]);
  return (
    <div></div>
    // <mesh ref={mesh}>
    //   <textGeometry attach="geometry" args={[st, config]} />
    //   <meshNormalMaterial attach="material" />
    // </mesh>
  );
}

const BoldText = () => {
  return (
    <>
      <mesh castShadow receiveShadow>
        <boxGeometry attach="geometry" args={[4, 4, 4]} />
        <meshStandardMaterial attach="material" />
        {/* <Text position={[2, 2, 2]} st="3D" size={1.3} /> */}
      </mesh>
    </>
  );
};
const textGeo = new THREE.TextGeometry ( "Hello, World!", { } );

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

          {/* ///////////////////////////////////////////////////////////////////////// */}
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
              {/* three.js表示 */}
              <BoldText />
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
}
