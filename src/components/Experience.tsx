'use client'

import { Suspense, useMemo } from 'react'
import {
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls
} from '@react-three/drei'
import { button, useControls } from 'leva'
import saveAs from 'file-saver'
import Model from './Model'
import { CITY_OPTIONS } from '@/lib/constants'

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

  const exports = useMemo(() => {
    const temp: Record<string, any> = {}
    temp['导出模型'] = button(() => {
      const link = document.createElement('a')
      const file = `/models/${city}.glb`
      link.href = file
      link.setAttribute('download', file)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
    return temp
  }, [city])

  useControls('导出', exports, { collapsed: true }, [exports])

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
