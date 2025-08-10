import { images, images_2, images_3 } from '@/constants/ExploreImages'
import Image from 'next/image'
import React from 'react'

export default function PhotoGrid() {
  return (
    <div className='grid grid-cols-3 gap-1'>
      <div className='col-span-1 flex flex-col gap-1'>
        {images.map(image => (
            <Image
                key={image.id}
                src={image.url}
                alt={image.name}
                width={0}
                height={0}
                sizes="100vw"
                className='w-full h-auto'
            />
        ))}
      </div>
      <div className='col-span-1 flex flex-col gap-1'>
      {images_2.map(image => (
            <Image
                key={image.id}
                src={image.url}
                alt={image.name}
                width={0}
                height={0}
                sizes="100vw"
                className='w-full h-auto '
            />
        ))}
      </div>
      <div className='col-span-1 flex flex-col gap-1'>
      {images_3.map(image => (
            <Image
                key={image.id}
                src={image.url}
                alt={image.name}
                width={0}
                height={0}
                sizes="100vw"
                className='w-full h-auto '
            />
        ))}
      </div>
    </div>
  )
}