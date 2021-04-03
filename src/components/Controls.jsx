import { useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = props => {
  const { camera, domElement } = useThree(state => ({
    camera: state.camera,
    domElement: state.gl.domElement,
  }));

  return <orbitControls args={[camera, domElement]} {...props} />;
};

export default Controls;
