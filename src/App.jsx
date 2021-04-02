import React from 'react';
import { Controls } from 'react-three-gui';

import OrbitControls from './components/Controls';
import TerrainManager from './components/TerrainManager';

const App = () => {
  return (
    <Controls.Provider>
      <Controls.Canvas>
        <OrbitControls />
        <TerrainManager />
        <ambientLight />
      </Controls.Canvas>
      <Controls 
        title="Terrain"
        collapsed={false}
      />
    </Controls.Provider>
  );
};

export default App;
