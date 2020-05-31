import React from 'react';
import { useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return <orbitControls args={[camera, domElement]} />;
};

export default Controls;
