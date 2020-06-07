import React, { useState } from 'react';

import Terrain from './Terrain';
import { useControl } from 'react-three-gui';

const TerrainManager = () => {
  const [seed, setSeed] = useState(Date.now());
  const updateSeed = () => setSeed(Date.now());

  useControl('Generate', {
    type: 'button',
    onClick: updateSeed,
  });

  const size = useControl('Resolution', {
    type: 'number',
    value: 50,
    min: 10,
    max: 500,
  });

  const height = useControl('Height', {
    type: 'number',
    value: 0.20,
    min: 0,
    max: 1,
  });

  const levels = useControl('Levels', {
    type: 'number',
    value: 8,
    min: 1,
    max: 20,
  });

  const scale = useControl('Scale', {
    type: 'number',
    value: 2,
    min: 0.1,
    max: 20,
  });

  return (
    <Terrain
      seed={seed}
      size={Math.floor(size)}
      height={height}
      levels={Math.floor(levels)}
      scale={scale}
    />
  );
};

export default TerrainManager;
