import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Controls } from 'react-three-gui';

import OrbitControls from './components/Controls';
import TerrainManager from './components/TerrainManager';

const App = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <TerrainManager />
        <ambientLight />
        {/*<axesHelper args={[1]} />*/}
      </Canvas>
      <Controls />
    </>
  );
};

export default App;
