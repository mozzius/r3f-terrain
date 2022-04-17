import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";

import TerrainManager from "./components/TerrainManager";

const App = () => {
  return (
    <Suspense fallback={<div className="loading">⛰</div>}>
      <Canvas
        dpr={window.devicePixelRatio}
        shadows
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
        camera={{ position: [1, 1, 1] }}
      >
        <OrbitControls />
        <TerrainManager />
        <Sky />
      </Canvas>
    </Suspense>
  );
};

export default App;
