import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Octahedron, Sphere, Box, Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// ─── 3D Shapes ────────────────────────────────────────────────────────────────

// Wireframe Icosahedron — floats and rotates slowly on the left
function FloatingIcosahedron() {
  const mesh = useRef();

  // useFrame runs every render frame — used for continuous rotation
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.3;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    // Float adds a gentle up/down floating motion on top of rotation
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <Icosahedron ref={mesh} args={[1.4, 0]} position={[-3.5, 0.5, -2]}>
        {/* Wireframe white material — low opacity for subtle look */}
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.18} transparent />
      </Icosahedron>
    </Float>
  );
}

// Wireframe Torus — spins gently on the right side
function FloatingTorus() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <Torus ref={mesh} args={[1.2, 0.35, 16, 60]} position={[3.8, -1, -1.5]}>
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.2} transparent />
      </Torus>
    </Float>
  );
}

// Wireframe Octahedron — wobbles in upper right
function FloatingOctahedron() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.4;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.25;
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
      <Octahedron ref={mesh} args={[0.8, 0]} position={[3, 2.2, -1]}>
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.22} transparent />
      </Octahedron>
    </Float>
  );
}

// Glowing distorted sphere — breathes in and out using scale animation
function GlowingSphere() {
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Sine/cosine on scale gives organic breathing effect
    mesh.current.scale.x = 1 + Math.sin(t * 0.8) * 0.06;
    mesh.current.scale.y = 1 + Math.cos(t * 0.6) * 0.06;
  });

  return (
    <Float speed={0.8} floatIntensity={0.5}>
      {/* Inner solid sphere */}
      <Sphere ref={mesh} args={[0.9, 32, 32]} position={[-2.5, -2, -1]}>
        <meshBasicMaterial color="#333333" wireframe={false} />
      </Sphere>
      {/* Outer glow shell — slightly larger, low opacity */}
      <Sphere args={[1.05, 32, 32]} position={[-2.5, -2, -1]}>
        <meshBasicMaterial color="#555555" wireframe opacity={0.08} transparent />
      </Sphere>
    </Float>
  );
}

// Small spinning wireframe cube — fast rotation for contrast
function FloatingCube() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.7;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.9;
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <Box ref={mesh} args={[0.5, 0.5, 0.5]} position={[1.5, 2.8, -1]}>
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.25} transparent />
      </Box>
    </Float>
  );
}

// ─── Particle Field ────────────────────────────────────────────────────────────

// 250 dust particles scattered around the scene — slowly rotate as a group
function Particles() {
  const ref = useRef();

  // useMemo generates particle positions once — avoids recalculating every frame
  const [positions] = useMemo(() => {
    const count = 250;
    const pos = new Float32Array(count * 3); // x, y, z for each particle

    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 16; // x — spread across width
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10; // y — spread across height
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;  // z — spread in depth
    }

    return [pos];
  }, []);

  // Slowly rotates the entire particle group each frame
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#888888"
        size={0.025}        // very small dots
        sizeAttenuation     // dots shrink with distance
        depthWrite={false}  // prevents z-fighting with other objects
        opacity={0.7}
      />
    </Points>
  );
}

// ─── 3D Scene ─────────────────────────────────────────────────────────────────

// Assembles all 3D objects into a single Canvas
function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }} // camera sits 6 units back, 60° field of view
      style={{ position: 'absolute', inset: 0 }} // fills the entire hero section
      gl={{ antialias: true, alpha: true }}       // smooth edges, transparent background
    >
      {/* Lights */}
      <ambientLight intensity={0.3} />                          {/* soft global light */}
      <pointLight position={[5, 5, 5]} intensity={0.5} />      {/* directional highlight */}

      {/* Scene objects */}
      <Particles />
      <FloatingIcosahedron />
      <FloatingTorus />
      <FloatingOctahedron />
      <GlowingSphere />
      <FloatingCube />
    </Canvas>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    // Full screen hero — id="home" links it to navbar scroll
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* 3D canvas renders as full background layer */}
      <Scene />

      {/* Hero text — z-10 keeps it above the 3D canvas */}
      <div className="relative z-10 flex h-screen w-full flex-col items-center justify-center px-4 text-center">

        {/* Subtitle animates in first */}
        <motion.p
          className="mb-3 text-sm font-medium tracking-widest uppercase text-zinc-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Full Stack Developer & Graphic Designer
        </motion.p>

        {/* Name — larger than previous version (5xl → 7xl on desktop) */}
        <motion.h1
          className="mb-4 text-5xl font-bold tracking-tight text-zinc-100 sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Peter Jakes
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="max-w-md text-base leading-relaxed text-zinc-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Building clean digital experiences with code and design.
        </motion.p>

        {/* CTA buttons animate in last */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {/* Primary CTA — solid white button */}
          
           <a href="#projects"
            className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white"
          >
            View Projects
          </a>

          {/* Secondary CTA — outlined button */}
          
           <a href="#contact"
            className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </div>
  );
}