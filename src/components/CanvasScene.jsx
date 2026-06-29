import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Computer from "./Computer";

function CanvasScene() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>

        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[-5, 5, 5]}
          intensity={1.5}
          color="#06b6d4"
        />

        <Computer />

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
        />

      </Canvas>
    </div>
  );
}

export default CanvasScene;