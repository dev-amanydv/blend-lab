import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";



export default function DaashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

          <div className="">
            <div className="dark:bg-primary-dark bg-white w-1/5 ">
              <Sidebar/>
            </div>
            <div className=" w-4/5 ml-[20%] min-h-screen dark:bg-[#0A0A0A] text-gray-800 ">  
              <div className="dark:bg-black border-b-[1px] border-b-[#bcbcbc] dark:border-b-[#2D2D2D] z-50 fixed top-0 right-0 backdrop-blur-3xl bg-[#EBECEC] flex justify-end w-[80%] h-13">
              <ThemeToggle/>
              </div>
              <div className="pt-13  min-h-screen">
              {children}
              </div>
            </div>
          </div>

  );
}