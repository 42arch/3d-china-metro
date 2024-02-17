import { CITIES } from '@/lib/constants'
import { useGLTF } from '@react-three/drei'
interface Props {
  city: string
}

const Model = ({ city }: Props) => {
  const asset = CITIES.find((c) => c.value === city)?.asset
  const model = useGLTF(asset!)

  return <primitive object={model.scene} />
}

export default Model

CITIES.forEach((city) => {
  useGLTF.preload(city.asset)
})
