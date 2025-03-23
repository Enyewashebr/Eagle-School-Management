
'use client'
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-100vh flex ">
      {/* Left side */}
      <div className=" w-[16%] md:w-[18%] lg:w-[16%] xl:w-[14%] ">
        <Link
          rel="stylesheet"
          href="/"
          className="flex items-center justify-center justistify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">Eagle school</span>
        </Link>
        <Menu />
      </div>
      {/* right side */}
      <div className="w-[84%] md:w-[82%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
 