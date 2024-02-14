'use client'

import { OrbitControls, Html } from '@react-three/drei'
import Model from './Model'
import { useControls } from 'leva'
import { CITY_OPTIONS } from '@/lib/constants'
import { Suspense } from 'react'

const Experience = () => {
  const { city, plane } = useControls({
    city: {
      label: '城市',
      options: CITY_OPTIONS
    },
    plane: {
      label: '平面',
      value: false
    }
  })

  return (
    <>
      <OrbitControls makeDefault />
      <Suspense fallback={<Html>loading</Html>}>
        <Model city={city} />
      </Suspense>
      <mesh rotation-x={-Math.PI * 0.5} scale={10} visible={plane}>
        <planeGeometry />
        <meshBasicMaterial wireframe />
      </mesh>
    </>
  )
}

export default Experience
