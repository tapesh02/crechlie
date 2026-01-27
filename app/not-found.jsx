'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Button,
  Paper,
  useMediaQuery
} from '@mui/material';
import { FiHome } from 'react-icons/fi';

function AnimatedSphere({ theme }) {
  const meshRef = useRef(null);
  const particlesRef = useRef([]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.3;
    }

    // Animate particles
    particlesRef.current.forEach((particle, i) => {
      particle.position.y += Math.sin(state.clock.elapsedTime + i * 0.1) * 0.01;
      particle.rotation.z += delta * 0.1;
    });
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color={theme.palette.primary.main}
        metalness={0.7}
        roughness={0.2}
        wireframe
      />

      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i) * 3,
            Math.cos(i * 0.5) * 2,
            Math.sin(i * 0.3) * 3
          ]}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color={theme.palette.secondary.main}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </mesh>
  );
}

function NotFound() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #f0f0f0 100%)`
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight
          position={[10, 10, 10]}
          color={theme.palette.primary.main}
          intensity={1}
        />
        <AnimatedSphere theme={theme} />
        <Stars count={500} radius={100} />
        {!isMobile && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>

      {/* Error Content Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          textAlign: 'center',
          color: theme.palette.text.primary
        }}
      >
        <Paper
          elevation={24}
          sx={{
            p: { xs: 4, md: 6 },
            maxWidth: 500,
            width: '90%',
            backdropFilter: 'blur(20px)',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 3,
            border: `2px solid ${theme.palette.divider}`,
            boxShadow: `0 20px 60px rgba(${
              theme.palette.mode === 'dark' ? '0, 0, 0' : '12, 9, 13'
            }, 0.15)`
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontSize: { xs: '3rem', md: '4rem' },
              fontWeight: 800,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #c41545 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            404
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: theme.palette.text.primary,
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '1.75rem' }
            }}
          >
            Oops! Page Not Found
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: theme.palette.text.secondary,
              maxWidth: 400,
              lineHeight: 1.6,
              fontSize: { xs: '0.95rem', md: '1rem' }
            }}
          >
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="/"
            startIcon={<FiHome size={20} />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.05rem',
              fontWeight: 700,
              borderRadius: 50,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #c41545 100%)`,
              color: '#fff',
              textTransform: 'none',
              boxShadow: `0 8px 32px rgba(224, 26, 79, 0.3)`,
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: `0 15px 40px rgba(224, 26, 79, 0.5)`
              },
              '&:active': {
                transform: 'translateY(-1px)'
              }
            }}
          >
            Go Home
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}

export default NotFound;
