'use client'

import { Suspense } from 'react'
import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls
} from '@react-three/drei'
import Model from './Model'

interface Props {
  city: string
  grid: boolean
  gizmo: boolean
}

const Viewer = ({ city, grid, gizmo }: Props) => {
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
          visible={gizmo}
          axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']}
          labelColor='white'
        />
      </GizmoHelper>
    </>
  )
}

export default Viewer
