"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

type Peptide = {
  id: string;
  name: string;
  sequence: string[];
  color: string;
  caption: string;
};

const PEPTIDES: Peptide[] = [
  {
    id: "bpc157",
    name: "BPC-157",
    sequence: [
      "Gly",
      "Glu",
      "Pro",
      "Pro",
      "Pro",
      "Gly",
      "Lys",
      "Pro",
      "Ala",
      "Asp",
      "Asp",
      "Ala",
      "Gly",
      "Leu",
      "Val",
    ],
    color: "#35d0a4",
    caption: "15-residue recovery research peptide",
  },
  {
    id: "selank",
    name: "Selank",
    sequence: ["Thr", "Lys", "Pro", "Arg", "Pro", "Gly", "Pro"],
    color: "#c8df72",
    caption: "Heptapeptide analog for calm-focus studies",
  },
  {
    id: "semax",
    name: "Semax",
    sequence: ["Met", "Glu", "His", "Phe", "Pro", "Gly", "Pro"],
    color: "#7dc7ff",
    caption: "ACTH-fragment nootropic research peptide",
  },
];

export function MolecularScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PEPTIDES[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % PEPTIDES.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0.2, 6.8], fov: 38 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 3]} intensity={2.1} />
        <pointLight position={[-3, -1, 4]} color="#35d0a4" intensity={1.8} />
        <Sparkles
          count={42}
          scale={[6, 3, 3]}
          size={1.4}
          speed={0.14}
          opacity={0.45}
          color={active.color}
        />
        <PeptideModel peptide={active} />
        <OrbitControls
          enableDamping
          enablePan={false}
          enableZoom={false}
          rotateSpeed={0.32}
        />
      </Canvas>

      <div className="pointer-events-none absolute left-5 top-5 rounded-lg border border-white/10 bg-[#07100e]/70 px-4 py-3 text-left backdrop-blur-md">
        <p className="font-mono text-[11px] uppercase text-[#9FABAA]">
          Active model
        </p>
        <p className="mt-1 font-serif text-2xl italic leading-none text-white">
          {active.name}
        </p>
      </div>

      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-xs text-sm leading-6 text-[#C6D1CE]">
          {active.caption}. Slow-rotating structural sketch for compound
          comparison.
        </p>
        <div className="pointer-events-auto flex gap-2">
          {PEPTIDES.map((peptide, index) => (
            <button
              key={peptide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg border px-3 py-2 font-mono text-[11px] uppercase transition-colors ${
                index === activeIndex
                  ? "border-[#35d0a4] bg-[#35d0a4] text-[#04110d]"
                  : "border-white/12 bg-white/[0.04] text-[#B9C4C1] hover:border-[#35d0a4]/70"
              }`}
            >
              {peptide.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PeptideModel({ peptide }: { peptide: Peptide }) {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(
    () => getResiduePoints(peptide.sequence.length),
    [peptide]
  );

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.12;
  });

  return (
    <group ref={group} rotation={[0.2, -0.4, 0]}>
      {points.map((point, index) => (
        <Residue
          key={`${peptide.id}-${index}`}
          position={point}
          label={peptide.sequence[index]}
          index={index}
          accent={peptide.color}
        />
      ))}
      {points.slice(1).map((point, index) => (
        <Bond
          key={`${peptide.id}-bond-${index}`}
          from={points[index]}
          to={point}
          color={peptide.color}
        />
      ))}
      <HelixRibbon points={points} color={peptide.color} />
    </group>
  );
}

function Residue({
  position,
  label,
  index,
  accent,
}: {
  position: THREE.Vector3;
  label: string;
  index: number;
  accent: string;
}) {
  const color = residueColor(label, accent);
  const isAnchor = index % 5 === 0;

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[isAnchor ? 0.18 : 0.13, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isAnchor ? 0.5 : 0.18}
          roughness={0.34}
          metalness={0.14}
        />
      </mesh>
      {isAnchor ? (
        <mesh scale={1.9}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshBasicMaterial color={accent} transparent opacity={0.09} />
        </mesh>
      ) : null}
    </group>
  );
}

function Bond({
  from,
  to,
  color,
}: {
  from: THREE.Vector3;
  to: THREE.Vector3;
  color: string;
}) {
  const { midpoint, length, quaternion } = useMemo(() => {
    const direction = new THREE.Vector3().subVectors(to, from);
    const midpoint = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    );

    return { midpoint, length: direction.length(), quaternion };
  }, [from, to]);

  return (
    <mesh position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.026, 0.026, length, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.16}
        roughness={0.42}
      />
    </mesh>
  );
}

function HelixRibbon({
  points,
  color,
}: {
  points: THREE.Vector3[];
  color: string;
}) {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const tube = useMemo(
    () => new THREE.TubeGeometry(curve, 96, 0.018, 10, false),
    [curve]
  );

  return (
    <mesh geometry={tube}>
      <meshBasicMaterial color={color} transparent opacity={0.34} />
    </mesh>
  );
}

function getResiduePoints(count: number) {
  const radius = count > 10 ? 1.16 : 1.02;
  const step = count > 10 ? 0.62 : 0.86;
  const height = count > 10 ? 0.19 : 0.28;

  return Array.from({ length: count }, (_, index) => {
    const center = (count - 1) / 2;
    return new THREE.Vector3(
      Math.cos(index * step) * radius,
      (index - center) * height,
      Math.sin(index * step) * radius
    );
  });
}

function residueColor(label: string, accent: string) {
  if (["Asp", "Glu"].includes(label)) {
    return "#ff8f70";
  }

  if (["Lys", "Arg", "His"].includes(label)) {
    return "#f3d36b";
  }

  if (["Pro", "Leu", "Val", "Ala", "Met", "Phe"].includes(label)) {
    return accent;
  }

  return "#e8eef2";
}
