'use client'

import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
  useProgress
} from '@react-three/drei'
import Model from './Model'
import { useControls } from 'leva'
import { CITY_OPTIONS } from '@/lib/constants'
import { Suspense } from 'react'

const Experience = () => {
  const { city, grid } = useControls({
    city: {
      label: '城市',
      options: CITY_OPTIONS
    },
    grid: {
      label: '水平面',
      value: false
    }
  })

  const { active, progress, errors, item, loaded, total } = useProgress()
  console.log(active, progress, errors, item, loaded, total)

  return (
    <>
      <OrbitControls makeDefault />
      <Suspense fallback={null}>
        <Model city={city} />
      </Suspense>
      <Grid
        infiniteGrid
        position={[0, 0, 0]}
        cellSize={0}
        sectionSize={1}
        sectionThickness={0.8}
        sectionColor={'#6f6f6f'}
        fadeDistance={14}
        fadeStrength={1.0}
        visible={grid}
      />
      <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
        <GizmoViewport
          axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']}
          labelColor='white'
        />
      </GizmoHelper>
    </>
  )
}

export default Experience
