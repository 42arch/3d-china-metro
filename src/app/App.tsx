'use client'

import Experience from '@/components/Experience'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'

const App = () => {
  return (
    <>
      <Leva collapsed />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 15, 0]
        }}
      >
        <Experience />
      </Canvas>
    </>
  )
}

export default App