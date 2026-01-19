"use client";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { useMemo } from "react";

export function PolandMesh({ url }: { url: string }) {
  const data = useLoader(SVGLoader, url);

  const geometry = useMemo(() => {
    const shapes: THREE.Shape[] = [];

    for (const path of data.paths) {
      const pathShapes = SVGLoader.createShapes(path);
      shapes.push(...pathShapes);
    }

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.35,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.04,
      bevelSegments: 2,
      steps: 1,
    };

    const geo = new THREE.ExtrudeGeometry(shapes, extrudeSettings);
    geo.computeBoundingBox();

    // wycentruj geometrię w (0,0,0)
    const box = geo.boundingBox!;
    const center = new THREE.Vector3();
    box.getCenter(center);
    geo.translate(-center.x, -center.y - 90, -center.z);

    // obróć, żeby leżało “ładnie” w scenie
    geo.rotateX(Math.PI / 1.995);

    // opcjonalnie lekko spłaszcz
    geo.scale(0.008, 0.2, 0.008);

    geo.computeVertexNormals();
    return geo;
  }, [data]);

  return (
    <group>
      {/* “ciało” mapy */}
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial color="#225ad3" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* delikatny “podświetlony” outline poprzez drugi mesh (opcjonalne) */}
      {/* <mesh geometry={geometry} scale={[1.005, 1.005, 1.005]}>
        <meshStandardMaterial
          color="#225ad3"
          roughness={0.9}
          metalness={0}
          transparent
          opacity={0.25}
        />
      </mesh> */}
    </group>
  );
}
