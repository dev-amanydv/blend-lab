import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen flex justify-center items-center relative dark:bg-[#0A0A0A]'>
        <div className='flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18" className="h-[180px] text-[#3a3a3a] w-[180px]"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 6.25v5.5"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6.25 9h5.5"></path><rect width="13.3" height="13.3" x="2.35" y="2.35" stroke="currentColor" strokeWidth="1.5" rx="6.65"></rect></svg>
            <div className='font-bold max-w-2xl text-center dark:text-[#3a3a3a] text-[60px] '>
                Your uploaded images will show up here
            </div>
        </div>
    </div>
  )
}
