import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

import TerrainManager from './components/TerrainManager';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas
        dpr={window.devicePixelRatio}
        shadows
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
        camera={{ position: [0.75, 0.75, 0.75] }}
      >
        <OrbitControls />
        <Stage shadows intensity={1} environment="city" preset="rembrandt">
          <TerrainManager />
        </Stage>
      </Canvas>
    </Suspense>
  );
};

export default App;
