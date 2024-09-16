import Image from 'next/image'
import RestaurantCard from '/src/components/restaurant.tsx'

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      {/* Add the RestaurantCard component */}
      <RestaurantCard
        banner='AAAaaaa aaaaAAA'
        name='Yazılım Burger'
        stars={4}
        isOpen={true}
        hours='10.00 - 22.00'
        minOrder={80}
      />
    </div>
  )
}
