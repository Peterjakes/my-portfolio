import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Octahedron, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// ─── 3D Shapes ────────────────────────────────────────────────────────────────

// Floating Icosahedron — positioned far left and high up
// args={[1, 0]} — radius 1, 0 subdivisions = sharp low-poly look
const FloatingIcosahedron = () => {
  const meshRef = useRef();

  // useFrame runs every render tick — used for continuous rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001; // slow tilt on X axis
      meshRef.current.rotation.y += 0.002; // slightly faster spin on Y axis
    }
  });

  return (
    // Float adds a gentle up/down bobbing motion on top of the rotation
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1, 0]} position={[-4.5, 1.5, -2]} scale={1.5}>
        {/* meshStandardMaterial responds to scene lighting unlike meshBasicMaterial */}
        <meshStandardMaterial wireframe color="#a1a1aa" />
      </Icosahedron>
    </Float>
  );
};

// Floating Torus — bottom right, scaled down so it doesn't dominate
// args={[1, 0.4, 16, 64]} — radius, tube radius, radial segments, tubular segments
const FloatingTorus = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.002; // rolls on Z axis
      meshRef.current.rotation.x += 0.001; // slight tilt on X axis
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      {/* Using raw mesh instead of drei component for custom geometry */}
      <mesh ref={meshRef} position={[4.5, -2.2, -1]} scale={0.75}>
        <torusGeometry args={[1, 0.4, 16, 64]} />
        <meshStandardMaterial wireframe color="#a1a1aa" />
      </mesh>
    </Float>
  );
};

// Floating Octahedron — upper right, pushed further back on Z axis
// args={[1, 0]} — radius, detail level (0 = flat faces)
const FloatingOctahedron = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003; // fastest rotation of all shapes
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.z += 0.001; // slight roll adds randomness
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <Octahedron ref={meshRef} args={[1, 0]} position={[3.5, 2.8, -3]} scale={1.3}>
        <meshStandardMaterial wireframe color="#a1a1aa" />
      </Octahedron>
    </Float>
  );
};

// Glowing Sphere — bottom left, well separated from icosahedron
// emissive + emissiveIntensity makes it appear to glow from within
const GlowingSphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0005; // very slow tilt
      meshRef.current.rotation.y += 0.001;  // gentle spin
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.9} floatIntensity={1.8}>
      <mesh ref={meshRef} position={[-3.8, -2.5, -2]} scale={1.4}>
        <sphereGeometry args={[1, 32, 32]} /> {/* 32 segments = smooth sphere */}
        <meshStandardMaterial
          color="#5a5a6a"
          wireframe
          emissive="#52525b"          // inner glow color
          emissiveIntensity={0.3}     // subtle glow — not too bright
        />
      </mesh>
    </Float>
  );
};

// Small Floating Cube — upper center-right, spins fastest of all shapes
const SmallFloatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005; // fast tumble
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.003; // slight roll
    }
  });

  return (
    // Highest float speed and intensity — makes it feel energetic
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2.5}>
      <mesh ref={meshRef} position={[1.2, 3.5, -1.5]} scale={0.8}>
        <boxGeometry args={[1, 1, 1]} /> {/* 1x1x1 cube */}
        <meshStandardMaterial wireframe color="#a1a1aa" />
      </mesh>
    </Float>
  );
};

// ─── Particle Field ────────────────────────────────────────────────────────────

// 400 particles spread across a wide 3D field — creates a starfield effect
const Particles = () => {
  const pointsRef = useRef();
  const particleCount = 400;

  // useMemo generates positions once on mount — avoids recalculating every frame
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3); // x, y, z per particle

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i]     = (Math.random() - 0.5) * 22; // X — wide horizontal spread
      positions[i + 1] = (Math.random() - 0.5) * 18; // Y — tall vertical spread
      positions[i + 2] = (Math.random() - 0.5) * 12; // Z — deep spread adds parallax
    }

    return positions;
  }, []);

  // Slowly rotates entire particle group — gives subtle drift feeling
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001; // very slow tilt
      pointsRef.current.rotation.y += 0.0002; // very slow pan
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* bufferAttribute feeds raw position data directly to the GPU */}
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3} // 3 values per particle: x, y, z
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}           // small dot size
        color="#a1a1aa"       // zinc-400 — matches overall colour palette
        sizeAttenuation       // dots shrink naturally with distance
      />
    </points>
  );
};

// ─── 3D Scene ─────────────────────────────────────────────────────────────────

// Assembles all 3D objects and lights into a single Canvas
const Scene3D = () => {
  return (
    // camera sits 8 units back with 50° fov — tighter than default for better framing
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ height: '100%' }}>

      {/* Lights — three point lights create depth and subtle colour variation */}
      <ambientLight intensity={0.6} />                                        {/* soft global fill */}
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />  {/* main key light */}
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#71717a" />{/* subtle fill from behind */}
      <pointLight position={[0, 0, 5]} intensity={0.3} />                     {/* front fill light */}

      {/* Scene objects */}
      <FloatingIcosahedron />
      <FloatingTorus />
      <FloatingOctahedron />
      <GlowingSphere />
      <SmallFloatingCube />
      <Particles />

      {/* Environment adds realistic ambient reflections to meshStandardMaterial */}
      <Environment preset="night" />
    </Canvas>
  );
};

// ─── Hero Section ──────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    // Full screen hero — id="home" links it to navbar scroll
    <div id="home" className="relative h-screen w-full overflow-hidden bg-black">

      {/* 3D canvas fills entire background — z-0 keeps it behind content */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Content overlay — pointer-events-none lets mouse events pass through to canvas */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">

        {/* Subtitle animates in first */}
        <motion.p
          className="mb-3 text-sm font-medium tracking-widest uppercase text-zinc-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Full Stack Developer & Graphic Designer
        </motion.p>

        {/* Name — animates in after subtitle */}
        <motion.h1
          className="mb-4 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
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

        {/* CTA buttons — pointer-events-auto re-enables clicks on buttons only */}
        <motion.div
          className="pointer-events-auto mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {/* Primary CTA — solid light button */}
          
           <a href="#projects"
            className="rounded-lg border border-zinc-700 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            View Projects
          </a>

          {/* Secondary CTA — outlined button */}
          
           <a href="#contact"
            className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            Get in Touch
          </a>
        </motion.div>

      </div>
    </div>
  );
}