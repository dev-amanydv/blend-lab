import React from 'react'

export default function PromptArea() {
  return (
    <div className='fixed bottom-40 w-full'>
      <div className='mx-auto min-h-28 max-w-2xl flex flex-col overflow-hidden w-full px-4 py-3 dark:bg-[#151515] bg-[#ebebeb] rounded-xl '>
        <div className='flex gap-2 items-center'>
          <div className={`dark:text-white text-black`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg></div>
          <textarea className='w-full  min-h-16'>

          </textarea>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
      </div>
      
    </div>
  )
}
