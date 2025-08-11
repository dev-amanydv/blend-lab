import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";



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
            <div className=" w-4/5 ml-[20%] min-h-screen backdrop-blur-xl dark:bg-[#0A0A0A] text-gray-800 ">  
              <div className="dark:bg-black fixed top-0 left-0 backdrop-blur-3xl bg-[#EBECEC]/50 flex justify-end w-full h-13">
              <ThemeToggle/>
              </div>
              <div className="pt-13">
              {children}
              </div>
            </div>
          </div>

  );
}