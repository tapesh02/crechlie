'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Box, Typography, Container, Stack, CircularProgress, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { FaChild } from 'react-icons/fa';

function KidFriendlyFloaters({ position }) {
  const theme = useTheme();
  const groupRef = useRef();
  const timeRef = useRef(0);

  useFrame((state) => {
    timeRef.current += 0.015;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(timeRef.current * 0.8) * 0.2;
      groupRef.current.position.y = Math.sin(timeRef.current * 1.5) * 0.15 + position[1];
      groupRef.current.position.x = Math.cos(timeRef.current * 0.7) * 0.1 + position[0];
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* 🧸 Teddy Bear Head - Light primary shade */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial 
          color={theme.palette.primary.light} 
          metalness={0.1}
          roughness={0.4}
        />
      </mesh>
      
      {/* 🧸 Teddy Bear Ears - Primary main */}
      <mesh position={[-0.25, 0.45, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial 
          color={theme.palette.primary.main} 
          roughness={0.4} 
        />
      </mesh>
      <mesh position={[0.25, 0.45, 0]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial 
          color={theme.palette.primary.main} 
          roughness={0.4} 
        />
      </mesh>

      {/* 🎈 Balloon - Light secondary shade */}
      <mesh position={[0, -0.1, 0]}>
        <sphereGeometry args={[0.22, 16, 12]} />
        <meshStandardMaterial 
          color={theme.palette.secondary.light} 
          metalness={0.05}
          roughness={0.3}
        />
      </mesh>

      {/* ✨ Sparkle Star - Background default with glow */}
      <mesh position={[0, 0.6, 0]}>
        <octahedronGeometry args={[0.08]} />
        <meshStandardMaterial 
          color={theme.palette.background.paper}
          emissive={theme.palette.primary.main}
          emissiveIntensity={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* 🎀 Ribbon - Secondary main */}
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
        <meshStandardMaterial color={theme.palette.secondary.main} />
      </mesh>
    </group>
  );
}

function FloatingStars() {
  const starsRef = useRef();
  const theme = useTheme();

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={80}
        depth={40}
        count={800}
        factor={4}
        saturation={0}
        fade
        speed={0.8}
      />
    </group>
  );
}

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const theme = useTheme();

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 6;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 60 }}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 8, 5]} intensity={1} />
        <FloatingStars />
        
        <KidFriendlyFloaters position={[-1.8, 0, -2.5]} />
        <KidFriendlyFloaters position={[1.8, 0.3, -2]} />
        <KidFriendlyFloaters position={[-0.8, -0.2, -3.5]} />
        <KidFriendlyFloaters position={[0.8, 0.5, -1.8]} />
        
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>

      <Container maxWidth="sm" sx={{ zIndex: 1, textAlign: 'center', bgcolor: '#fefefe94' }}>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1.5} sx={{ mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaChild size={24} color="white" />
            </Box>
            <Typography variant="h3" component="div" sx={{ fontWeight: 700 }}>
              Crechlie
            </Typography>
          </Stack>

          <Typography variant="h5" sx={{ mb: 2, color: 'text.primary' }}>
            Loading your childcare experience...
          </Typography>
          
          <Stack spacing={2} alignItems="center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              style={{ width: 120, height: 120 }}
            >
              <CircularProgress
                variant="determinate"
                value={progress}
                size={100}
                thickness={4}
                sx={{
                  color: theme.palette.primary[100],
                  '--CircularProgress-size': '100px',
                }}
              />
              <CircularProgress
                variant="determinate"
                value={progress}
                size={80}
                thickness={5}
                sx={{
                  position: 'absolute',
                  color: 'primary.main',
                  '--CircularProgress-size': '80px',
                }}
              />
            </motion.div>

            <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main' }}>
              {Math.round(progress)}%
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Preparing fun adventures for little ones ✨
            </Typography>
          </Stack>
        </motion.div>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'linear-gradient(135deg, rgba(248, 250, 252, 0.92) 0%, rgba(241, 245, 249, 0.95) 100%)',
          zIndex: 0,
        }}
      />
    </Box>
  );
}
