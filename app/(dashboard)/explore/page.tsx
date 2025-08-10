import PhotoGrid from '@/components/explore/PhotoGrid'
import ThemeToggle from '@/components/ThemeToggle'
import React from 'react'

export default function Explore() {
  return (
    <div className="min-h-screen backdrop-blur-xl dark:bg-neutral-900 text-gray-800">
      <PhotoGrid/>
    </div>
  )
}
