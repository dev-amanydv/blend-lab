"use client"
import { CircleUserRound } from 'lucide-react'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Sidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  console.log("Theme: ", theme)
  return (
    <div className='flex flex-col justify-between border-r-[1px] border-[#BCBCBC] dark:border-[#2D2D2D] fixed top-0 w-1/5 left-0 dark:bg-primary-dark backdrop-blur-3xl h-screen ' >
      <div className='flex flex-col gap-5'>
        <div className='text-xl p-4'>BlendLab</div>
        <div className='flex flex-col gap-5 mx-2'>
            <div className='flex flex-col'>
              <Link href={'/new'}>
                <div className={`flex gap-2 items-center ${pathname === '/new' ? 'dark:bg-[#262626] bg-[#d5d5d5] dark:hover:bg-[#262626]' : "dark:hover:bg-[#262626]/50"} rounded-md py-2 px-3  hover:backdrop-blur-2xl cursor-pointer hover:bg-neutral-300/40 font-light text-sm`}> <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon" aria-hidden="true"><path d="M2.6687 11.333V8.66699C2.6687 7.74455 2.66841 7.01205 2.71655 6.42285C2.76533 5.82612 2.86699 5.31731 3.10425 4.85156L3.25854 4.57617C3.64272 3.94975 4.19392 3.43995 4.85229 3.10449L5.02905 3.02149C5.44666 2.84233 5.90133 2.75849 6.42358 2.71582C7.01272 2.66769 7.74445 2.66797 8.66675 2.66797H9.16675C9.53393 2.66797 9.83165 2.96586 9.83179 3.33301C9.83179 3.70028 9.53402 3.99805 9.16675 3.99805H8.66675C7.7226 3.99805 7.05438 3.99834 6.53198 4.04102C6.14611 4.07254 5.87277 4.12568 5.65601 4.20313L5.45581 4.28906C5.01645 4.51293 4.64872 4.85345 4.39233 5.27149L4.28979 5.45508C4.16388 5.7022 4.08381 6.01663 4.04175 6.53125C3.99906 7.05373 3.99878 7.7226 3.99878 8.66699V11.333C3.99878 12.2774 3.99906 12.9463 4.04175 13.4688C4.08381 13.9833 4.16389 14.2978 4.28979 14.5449L4.39233 14.7285C4.64871 15.1465 5.01648 15.4871 5.45581 15.7109L5.65601 15.7969C5.87276 15.8743 6.14614 15.9265 6.53198 15.958C7.05439 16.0007 7.72256 16.002 8.66675 16.002H11.3337C12.2779 16.002 12.9461 16.0007 13.4685 15.958C13.9829 15.916 14.2976 15.8367 14.5447 15.7109L14.7292 15.6074C15.147 15.3511 15.4879 14.9841 15.7117 14.5449L15.7976 14.3447C15.8751 14.128 15.9272 13.8546 15.9587 13.4688C16.0014 12.9463 16.0017 12.2774 16.0017 11.333V10.833C16.0018 10.466 16.2997 10.1681 16.6667 10.168C17.0339 10.168 17.3316 10.4659 17.3318 10.833V11.333C17.3318 12.2555 17.3331 12.9879 17.2849 13.5771C17.2422 14.0993 17.1584 14.5541 16.9792 14.9717L16.8962 15.1484C16.5609 15.8066 16.0507 16.3571 15.4246 16.7412L15.1492 16.8955C14.6833 17.1329 14.1739 17.2354 13.5769 17.2842C12.9878 17.3323 12.256 17.332 11.3337 17.332H8.66675C7.74446 17.332 7.01271 17.3323 6.42358 17.2842C5.90135 17.2415 5.44665 17.1577 5.02905 16.9785L4.85229 16.8955C4.19396 16.5601 3.64271 16.0502 3.25854 15.4238L3.10425 15.1484C2.86697 14.6827 2.76534 14.1739 2.71655 13.5771C2.66841 12.9879 2.6687 12.2555 2.6687 11.333ZM13.4646 3.11328C14.4201 2.334 15.8288 2.38969 16.7195 3.28027L16.8865 3.46485C17.6141 4.35685 17.6143 5.64423 16.8865 6.53613L16.7195 6.7207L11.6726 11.7686C11.1373 12.3039 10.4624 12.6746 9.72827 12.8408L9.41089 12.8994L7.59351 13.1582C7.38637 13.1877 7.17701 13.1187 7.02905 12.9707C6.88112 12.8227 6.81199 12.6134 6.84155 12.4063L7.10132 10.5898L7.15991 10.2715C7.3262 9.53749 7.69692 8.86241 8.23218 8.32715L13.2791 3.28027L13.4646 3.11328ZM15.7791 4.2207C15.3753 3.81702 14.7366 3.79124 14.3035 4.14453L14.2195 4.2207L9.17261 9.26856C8.81541 9.62578 8.56774 10.0756 8.45679 10.5654L8.41772 10.7773L8.28296 11.7158L9.22241 11.582L9.43433 11.543C9.92426 11.432 10.3749 11.1844 10.7322 10.8271L15.7791 5.78027L15.8552 5.69629C16.185 5.29194 16.1852 4.708 15.8552 4.30371L15.7791 4.2207Z"></path></svg>Generate Image from Text</div>
              </Link>
              <Link href={'/remove-bg'}>
                <div className={`flex gap-2 items-center ${pathname === '/remove-bg' ? 'dark:bg-[#262626] bg-[#d5d5d5] dark:hover:bg-[#262626]' : "dark:hover:bg-[#262626]/50"} rounded-md py-2 px-3  hover:backdrop-blur-2xl cursor-pointer hover:bg-neutral-300/40 font-light text-sm`}> {theme === 'light' ? (<Image priority={true} src={'/bg-remove-light.png'} height={18} quality={100} width={18} alt='background-remove' />) : (<Image src={'/bg-remove-dark.png'} quality={100} height={18} width={18} alt='background-remove' />)} Remove Background <div className='text-[10px] bg-amber-500 font-medium mb-2 text-black rounded-md px-1'>New</div></div>
              </Link>
              <Link href={'#'}>
                <div className='flex gap-2 group justify-between pr-10 items-center rounded-md py-2 px-3 dark:hover:bg-[#262626]/50 hover:backdrop-blur-2xl cursor-pointer hover:bg-neutral-300/40 font-light text-sm'>
                 <div className='flex items-center gap-2'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon" aria-hidden="true"><path d="M14.0857 8.74999C14.0857 5.80355 11.6972 3.41503 8.75073 3.41503C5.80429 3.41503 3.41577 5.80355 3.41577 8.74999C3.41577 11.6964 5.80429 14.085 8.75073 14.085C11.6972 14.085 14.0857 11.6964 14.0857 8.74999ZM15.4158 8.74999C15.4158 10.3539 14.848 11.8245 13.9041 12.9746L13.9705 13.0303L16.9705 16.0303L17.0564 16.1338C17.2269 16.3919 17.1977 16.7434 16.9705 16.9707C16.7432 17.1975 16.3925 17.226 16.1345 17.0557L16.03 16.9707L13.03 13.9707L12.9753 13.9033C11.8253 14.8472 10.3547 15.415 8.75073 15.415C5.06975 15.415 2.08569 12.431 2.08569 8.74999C2.08569 5.06901 5.06975 2.08495 8.75073 2.08495C12.4317 2.08495 15.4158 5.06901 15.4158 8.74999Z"></path></svg>Search Media
                 </div>
                 <div className='text-[#999] opacity-0 group-hover:opacity-100'>
                  <span className='text-[#999]'>⌘</span>
                  <span className='text-[#999]'>K</span>
                 </div>
                </div>
              </Link>
              <Link href={'/explore'}>
                <div className={`flex gap-2 items-center ${pathname === '/explore' ? "dark:bg-[#262626] bg-[#d5d5d5] " : "dark:hover:bg-[#262626]/50 hover:bg-[#d5d5d5]"} rounded-md py-2 px-3 hover:backdrop-blur-2xl cursor-pointer hover:bg-neutral-300/40 font-light text-sm`}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28" className="h-[18px] w-[18px]"><path fill="currentColor" d="M11.778 17.507V12.66a.903.903 0 0 1 1.391-.764l3.75 2.423a.91.91 0 0 1 0 1.528l-3.75 2.424a.903.903 0 0 1-1.391-.764"></path><path stroke="currentColor" strokeWidth="2.33" d="M24 15.676v-1.992c0-1.683 0-2.526-.239-3.285a5.2 5.2 0 0 0-1.016-1.827c-.519-.603-1.234-1.047-2.665-1.936l-1.704-1.058c-1.588-.986-2.382-1.479-3.233-1.671a5.2 5.2 0 0 0-2.286 0c-.851.192-1.645.685-3.233 1.671L7.92 6.636c-1.43.889-2.146 1.333-2.665 1.936a5.2 5.2 0 0 0-1.016 1.827C4 11.16 4 12.001 4 13.685v1.991c0 2.904 0 4.356.565 5.465a5.2 5.2 0 0 0 2.266 2.266c1.11.565 2.561.565 5.465.565h3.408c2.904 0 4.356 0 5.465-.565a5.2 5.2 0 0 0 2.266-2.266C24 20.031 24 18.58 24 15.676Z"></path></svg>Explore</div>
              </Link>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='text-sm font-semibold px-2 dark:text-[#999] text-[#3a3a3a]'>Library</div>
              <div className='flex flex-col'>
                <Link href={'/media'}>
                 <div className={`flex gap-2 items-center ${pathname === '/media' ? "dark:bg-[#262626] bg-[#d5d5d5] " : "dark:hover:bg-[#262626]/50 hover:bg-[#d5d5d5]"} rounded-md py-2 px-3 dark:hover:bg-[#262626]/50 hover:backdrop-blur-md cursor-pointer hover:bg-neutral-300/40 font-light text-sm`}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18" className="h-[18px] w-[18px]"><path stroke="currentColor" strokeWidth="1.5" d="M1.654 10.323c-.154-1.25-.23-1.876-.046-2.384a2.25 2.25 0 0 1 .856-1.095c.448-.302 1.073-.38 2.324-.533l2.531-.31c1.25-.154 1.876-.23 2.384-.046.446.162.83.462 1.096.856.302.448.379 1.073.532 2.324l.31 2.53c.154 1.252.231 1.877.046 2.385a2.25 2.25 0 0 1-.856 1.095c-.448.302-1.073.38-2.324.533l-2.53.31c-1.251.154-1.877.23-2.384.046a2.25 2.25 0 0 1-1.096-.856c-.302-.448-.379-1.073-.533-2.324z"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M14.25 12.102q.065-.017.126-.04a2.25 2.25 0 0 0 1.095-.856c.302-.448.38-1.073.533-2.324l.31-2.53c.154-1.251.23-1.877.046-2.384a2.25 2.25 0 0 0-.856-1.096c-.448-.302-1.073-.379-2.324-.533l-2.531-.31c-1.25-.154-1.876-.23-2.384-.046a2.25 2.25 0 0 0-1.095.856c-.103.152-.18.325-.242.536"></path><path fill="currentColor" d="m5.371 12.718-.418-2.973a.563.563 0 0 1 .793-.589l2.52 1.162c.373.171.443.67.132.937l-2.103 1.811a.562.562 0 0 1-.924-.348"></path></svg>My Media</div>
                </Link>
                <Link href={'/uploads'}>
                 <div className={`flex gap-2 items-center ${pathname === '/uploads' ? "dark:bg-[#262626] bg-[#d5d5d5] " : "dark:hover:bg-[#262626]/50 hover:bg-[#d5d5d5]"} rounded-md py-2 px-3 dark:hover:bg-[#262626]/50 hover:backdrop-blur-2xl cursor-pointer hover:bg-neutral-300/40 font-light text-sm`}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18" className="h-[18px] w-[18px]"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 6.25v5.5"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6.25 9h5.5"></path><rect width="13.3" height="13.3" x="2.35" y="2.35" stroke="currentColor" strokeWidth="1.5" rx="6.65"></rect></svg>Uploads</div>
                </Link>
              </div>
            </div>
        </div>
        
      </div>
      <div className='flex p-3 dark:bg-[#2e2e2e] bg-gray-300 cursor-pointer w-full'>
        <div className='flex items-center gap-3'>
          <CircleUserRound className='#FFF' />
          <div className='flex flex-col'>
            <h1 className='text-sm'>Aman Yadav</h1>
            <p className='text-[10px] dark:text-gray-400 text-gray-800'>ay.work07@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
