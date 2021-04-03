import { extend, useLoader } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';

extend({
  SlopeBlendMaterial: shaderMaterial(
    {
      tFlat: undefined,
      tSlope: undefined,
      fNormal: { type: 'v3', value: [], boundTo: 'faces' },
    },
    `    
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      vUv = vec2(uv.x, uv.y);
      vNormal = vec3(normal.x, normal.y, normal.z);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    `
    uniform sampler2D tFlat;
    uniform sampler2D tSlope;

    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      vec4 flatTex = texture2D(tFlat, vUv);
      vec4 slopeTex = texture2D(tSlope, vUv);

      gl_FragColor = mix(flatTex, slopeTex, smoothstep(0.0, 0.1, acos(dot(vec3(0.0, 1.0, 0.0), vNormal)) / 12.0));
    }
    `
  ),
});

const MountainMaterial = () => {
  const [flatTexture, slopeTexture] = useLoader(TextureLoader, [
    '/grass.jpg',
    '/rock.jpg',
  ]);

  return <slopeBlendMaterial tFlat={flatTexture} tSlope={slopeTexture} />;
};

export default MountainMaterial;
