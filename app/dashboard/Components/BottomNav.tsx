"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navData } from "./SideNav";


const BottomNav = () => {
    const [activeTab, setActiveTab] = useState<string>('feed');
    return (
        <nav className="bg-gray-900 shadow-md h-14 w-full fixed bottom-0 z-30 hidden lg:block">
            <section className="flex justify-between items-center relative h-14 w-full px-8">
                {navData.map((item) => (
                    <Link href={item.href} key={item.id}>
                        <Image 
                            src={item.icon}
                            alt={item.label}
                            width={36}
                            height={36}
                        />
                    </Link>
                ))}
            </section>
        </nav>
    )
}

export default BottomNav;