'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

const RotatingTorus = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} scale={1}>
            <torusGeometry args={[1, 0.4, 16, 100]} />
            <meshPhysicalMaterial
                transparent={true}
                opacity={1}
                roughness={0}
                metalness={0.1}
                // reflectivity={1}
                clearcoat={1}
                clearcoatRoughness={1}
                thickness={0.02}
                transmission={1}
                ior={1.5}
            />
        </mesh>
    );
}

const Cube = () => {
    return (
        <Canvas>
            <OrbitControls
                makeDefault
                enableZoom={false} // Disable zoom
            />
            <RotatingTorus />
        </Canvas>
    );
}

export default Cube;
