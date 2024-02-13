'use client'

import { OrbitControls } from '@react-three/drei'
import Model from './Model'

const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <Model />
    </>
  )
}

export default Experience
