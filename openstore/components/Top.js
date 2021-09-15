import Button from '@material-ui/core/Button';
import React from 'react';
// import * as THREE from 'three';
import * as CANNON from 'cannon';
// import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useCannon, Provider } from '../src/useCannon';

// 無限に落ちるのを防ぐための平面のコード

const Plane = ({ position }) => {
  const ref = useCannon({ mass: 0 }, (body) => {
    body.addShape(new CANNON.Plane());
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" opacity={0} />
    </mesh>
  );
};

// 落ちていく物体のコード

const Box = ({ position, args }) => {
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
                <Plane position={[0, 0, -10]} />
                <Box position={[1, 0, 1]} args={[2, 2, 2]} />
                <Box position={[1, 0, 1]} args={[1, 1, 5]} />
                <Box position={[2, 1, 5]} args={[3, 3, 3]} />
                <Box position={[0, 0, 6]} args={[2, 4, 2]} />
                <Box position={[-1, 1, 8]} args={[2, 3, 2]} />
                <Box position={[0, 2, 3]} args={[5, 5, 1]} />
                <Box position={[2, -1, 13]} args={[1, 1, 10]} />
              </Provider>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
}
