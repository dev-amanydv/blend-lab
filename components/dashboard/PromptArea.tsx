import React from 'react'

export default function PromptArea() {
  return (
    // STEP 1: This parent container now correctly spans the ENTIRE viewport
    // by using `left-0 right-0`. We also use `flex justify-center`
    // to center the child item.
    <div className='fixed w-4/5 bottom-40 right-0 flex justify-center'>

      {/* STEP 2: The prompt box itself NO LONGER NEEDS `mx-auto`,
          because its parent is now handling the centering.
      */}
      <div className='min-h-28 max-w-2xl w-full backdrop-blur-[18px] flex flex-col overflow-hidden px-4 py-3 dark:bg-gray-600/50 bg-[#D5D5D5]/90 rounded-xl'>
        <div className='flex gap-2 items-center'>
          <div className={`dark:text-white text-black`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" clipRule="evenodd"></path></svg>
          </div>
          <textarea className='w-full px-2 py-2 ml-2 dark:text-white text-black min-h-16 bg-transparent outline-none resize-none'>
          </textarea>
        </div>
        <div>
          {/* Other elements */}
          <div></div>
          <div></div>
          <div></div>
        </div>
        
      </div>
      
    </div>
  )
}