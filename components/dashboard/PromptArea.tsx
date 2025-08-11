import React from 'react'

export default function PromptArea() {
  return (
    // This parent container is full-width, which is correct.
    <div className='fixed bottom-40 w-full flex justify-center'>

      {/* This is the prompt box.
        REMOVED `w-full` from here.
        `max-w-xl` now limits the width, and `mx-auto` centers it.
      */}
      <div className='min-h-28 min-w-lg max-w-xl backdrop-blur-xl flex flex-col overflow-hidden px-4 py-3 dark:bg-[#262626]/90 bg-[#D5D5D5]/90 rounded-xl'>
        <div className='flex gap-2 items-center'>
          <div className={`dark:text-white text-black`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" clipRule="evenodd"></path></svg>
          </div>
          <textarea className='w-full border-l-[1px] px-2 py-2 ml-2 dark:text-white text-black border-[#7d7d7d] min-h-16 bg-transparent outline-none resize-none'>
            {/* It's also good practice to make the textarea transparent and remove its outline */}
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