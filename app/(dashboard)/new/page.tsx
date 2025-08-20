import PromptArea from '@/components/dashboard/PromptArea'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen relative w-full dark:bg-[#0A0A0A] text-gray-800'>
    <Image src={'/ai-bg.jpeg'} fill={true} className="object-cover -z-20" alt="AI-generated background image" />
    <div className='absolute backdrop-blur-[1px] -z-10 inset-0 dark:bg-[#0A0A0A]/20 bg-gray-200'/>
    <div className='w-full flex justify-center items-center  pt-50'>
      <h1 className='text-3xl bg-gradient-to-b text-transparent  from-blue-500 to-blue-300 bg-clip-text font-semibold'>
        Hello, Aman!
      </h1>
      <PromptArea/>
    </div>
    </div>
  )
}
