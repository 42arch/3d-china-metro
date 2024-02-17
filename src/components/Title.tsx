import { CITIES } from '@/lib/constants'

interface Props {
  city: string
}

const Title = ({ city }: Props) => {
  const cityName = CITIES.find((c) => c.value === city)?.label

  return (
    <div className='absolute left-2 top-4 z-10 md:left-8'>
      <h1 className='text-2xl font-bold'>{cityName}</h1>
    </div>
  )
}

export default Title
