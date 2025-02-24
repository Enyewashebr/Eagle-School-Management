import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="h-screen flex">
    {/* Left side */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-gray-200">
        <Link rel="stylesheet" href="/" />
        <Image src="logo.png" alt="logo"  width={32} height={32}/>
        <span>Eagle school</span>
    </div>
    {/* right side */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] ">right</div>
   </div>
  );
}
 