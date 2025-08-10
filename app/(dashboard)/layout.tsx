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
            <div className=" w-4/5 ml-[20%] ">  
              <div className="dark:bg-black backdrop-blur-3xl flex justify-end w-full h-13">
              <ThemeToggle/>
              </div>    
              {children}
            </div>
          </div>

  );
}