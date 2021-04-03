import { Canvas } from '@react-three/fiber';

import OrbitControls from './components/Controls';
import TerrainManager from './components/TerrainManager';

const App = () => {
  return (
    <Canvas
      onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      camera={{ position: [0.75, 0.75, 0.75] }}
    >
      <OrbitControls />
      <TerrainManager />
      <ambientLight />
    </Canvas>
  );
};

export default App;
