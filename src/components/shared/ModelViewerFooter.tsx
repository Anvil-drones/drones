"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { ClonedModel } from "./ClonedModel";

export default function ModelViewerFooter() {
  return (
    <div className="z-10 aspect-[208/130] w-full">
      <Canvas
        shadows
        camera={{ position: [0, 7, 10], fov: 50 }}
        className="h-full w-full"
      >
        <ambientLight intensity={1.2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          intensity={2}
          penumbra={1}
          castShadow
        />
        <hemisphereLight args={["#eeeeee", "#444444", 1]} />
        <Environment preset="sunset" environmentIntensity={0.2} />
        <Suspense fallback={null}>
          <ClonedModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
