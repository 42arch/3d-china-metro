'use client'

import { useMemo } from 'react'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva, button, useControls } from 'leva'
import Viewer from '@/components/Viewer'
import { CITY_OPTIONS } from '@/lib/constants'
import Title from '@/components/Title'
import Footer from '@/components/Footer'

const App = () => {
  const { city, grid, gizmo } = useControls({
    city: {
      label: '城市',
      options: CITY_OPTIONS
    },
    grid: {
      label: '水平面',
      value: false
    },
    gizmo: {
      label: '视角控制',
      value: true
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
      <Title city={city} />
      <Leva collapsed />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 15, 0]
        }}
      >
        <Viewer city={city} grid={grid} gizmo={gizmo} />
      </Canvas>
      <Footer />
      <Loader />
    </>
  )
}

export default App
