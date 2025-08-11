import PromptArea from '@/components/dashboard/PromptArea'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen relative dark:bg-[#0A0A0A] text-gray-800'>
    <Image src={'/ai-bg.jpeg'} fill={true} className="object-cover -z-10" alt="AI-generated background image" />
    <div className='absolute backdrop-blur-[10px] inset-0 dark:bg-[#0A0A0A]/20 bg-gray-200'/>
    <div>
        <PromptArea/>
    </div>
    </div>
  )
}
