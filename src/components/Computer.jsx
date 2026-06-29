import { Float } from "@react-three/drei";

function Computer() {
  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      {/* Screen */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 1.6, 0.15]} />
        <meshStandardMaterial color="#0ea5e9" />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -1.05, 0.45]} rotation={[-0.6, 0, 0]}>
        <boxGeometry args={[2.2, 0.12, 1.3]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>

      {/* Base */}
      <mesh position={[0, -0.6, -0.05]}>
        <boxGeometry args={[0.3, 0.8, 0.1]} />
        <meshStandardMaterial color="#4b5563" />
      </mesh>
    </Float>
  );
}

export default Computer;