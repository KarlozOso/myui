import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const Slider = () => {
  const images = [
    'https://images.pexels.com/photos/2099590/pexels-photo-2099590.jpeg',
    'https://images.pexels.com/photos/13708556/pexels-photo-13708556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/16845245/pexels-photo-16845245/free-photo-of-ciudad-carretera-calle-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleIndicatorClick = index => {
    setCurrentIndex(index)
  }

  return (
    <div className=''>
    <div className='flex items-center justify-end mt-6 mx-6 mb-5'>
      <div className='rounded-xl overflow-hidden'>
        <div className=' relative'>
          <img
            src={images[currentIndex]}
            alt='Slider'
            className='w-screen h-[500px] lg:w-[800px] lg:h-[500px] object-cover rounded-xl'
          />
          <div className='absolute inset-0 flex justify-center items-end mb-4 '>
            <div className='flex justify-center space-x-2'>
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`h-2 w-6 bg-gray-300 self-center rounded-full ${
                    index === currentIndex ? 'bg-white' : ''
                  } cursor-pointer`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className='absolute left-0 top-1/2 transform -translate-y-1/2  hover:bg-gray-700 hover:bg-opacity-60 text-white px-1 py-1 rounded-full'
          >
            <ArrowBackIosNewIcon />
          </button>
          <button
            onClick={handleNext}
            className='absolute right-0 top-1/2 transform -translate-y-1/2  hover:bg-gray-700 hover:bg-opacity-60 text-white px-1 py-1 rounded-full'
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Slider
