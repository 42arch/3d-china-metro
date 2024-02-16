import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()
  console.log(active, progress, errors, item, loaded, total)

  return <Html center>{progress} % loaded</Html>
}

export default Loader
