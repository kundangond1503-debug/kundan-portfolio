import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function CanvasScene() {
  return (
    <div className="w-full h-[360px] md:h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>

        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, 5, 5]} intensity={1} color="#06b6d4" />

        <OrbitControls autoRotate autoRotateSpeed={1.2} enableZoom={false} />

      </Canvas>
    </div>
  );
}

export default CanvasScene;