import React, { useMemo } from 'react';
import SimplexNoise from 'simplex-noise';

import Terrain from './Terrain';
import { useControl } from 'react-three-gui';

const TerrainManager = () => {
  const simplex = useMemo(() => new SimplexNoise(Date.now()), []);
  const size = useControl('Size', {
    type: 'number',
    value: 50,
    min: 10,
    max: 1000,
  });
  const height = useControl('Height', {
    type: 'number',
    value: 0.1,
    min: 0.001,
    max: 1,
  });

  return (
    <Terrain
      simplex={simplex}
      size={Math.floor(size)}
      height={height}
      offset={{ x: 0, z: 0 }}
    />
  );
};

export default TerrainManager;
