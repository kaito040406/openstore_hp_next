import Button from '@material-ui/core/Button';
// import { Canvas } from 'react-three-fiber';
import React, { Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const LoadModel = () => {
//   const gltf = useLoader(GLTFLoader, '../three/examples/jsm/loaders/three.glb');
//   return (
//     <>
//       <primitive object={gltf.scene} dispose={null} />
//     </>
//   );
// };

const Model = () => {
  const gltf = useLoader(GLTFLoader, './Three.gltf');
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
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
            <Canvas>
              <Suspense fallback={null}>
                <Model />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
}
