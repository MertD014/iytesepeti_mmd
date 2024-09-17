import Image from 'next/image'
interface RestaurantCardProps {
  banner: string
  name: string
  stars: number
  isOpen: boolean
  hours: string
  minOrder: number
  imageSrc: string
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ banner, name, stars, isOpen, hours, minOrder, imageSrc }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-80'>
      <div className='bg-gray-100 text-center p-2 text-xs text-gray-600'>{banner}</div>
      <div className='relative h-48 w-full'>
        <Image src={imageSrc} alt={`${name} image`} layout='fill' objectFit='cover' />
      </div>
      <div className='p-4'>
        <h2 className='text-xl font-semibold text-gray-800'>{name}</h2>
        <div className='flex items-center my-2'>
          <div className='text-yellow-500 text-lg'>{'⭐'.repeat(stars)}</div>
          <span className='ml-2 text-gray-600 text-sm'>{stars} Stars</span>
        </div>
        <div className='flex items-center mb-2'>
          <span className={`text-sm font-semibold ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
            {isOpen ? 'Open' : 'Closed'}
          </span>
          <span className='ml-2 text-gray-600 text-sm'>• Hours: {hours}</span>
        </div>
        <div className='text-gray-600 text-sm'>
          Min Order: <span className='font-semibold'>${minOrder}</span>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
