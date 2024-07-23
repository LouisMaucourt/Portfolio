'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { TorusGeometry } from 'three';
import { MeshTransmissionMaterial } from '@react-three/drei';

export default function Scene() {
    return (
        <Canvas>
            <TorusModel />
        </Canvas>
    );
}

function TorusModel() {
    const torusRef = useRef();

    useFrame(() => {
        if (torusRef.current) {
            torusRef.current.rotation.x += 0.02;
            torusRef.current.rotation.y += 0.02;
        }
    });

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    };

    return (
        <group>
            <mesh ref={torusRef}>
                <torusGeometry args={[1, 0.4, 16, 100]} />
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    );
}
