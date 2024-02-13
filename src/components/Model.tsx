import { useGLTF } from '@react-three/drei'
import React from 'react'

const Model = () => {
  const model = useGLTF('./models/xian.glb')

  return <primitive object={model.scene} />
}

export default Model
