import Button from '@material-ui/core/Button';
import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const Thing = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.z += 0.01));
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click')}
      onPointerOver={(e) => console.log('hover')}
      onPointerOut={(e) => console.log('unhover')}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={0.5}
        transparent
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
            <Canvas>
              <Thing />
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
}
