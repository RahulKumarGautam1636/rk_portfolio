import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from '../Loader';

const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0}/>
  )
}



const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }} camera={{fov: 45, near: 0.1, far: 200, position: [-4, 3, 6]}}>
      <Suspense fallback={null}>             {/* Shows CanvasLoader untill the main canvas is loaded to be shown */}
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Earth/>
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;


// "iPhone 13 Pro Max" (https://skfb.ly/oCpYU) by Reaper3D is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).