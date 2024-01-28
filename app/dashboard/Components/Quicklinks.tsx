"use client"
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface DataProps {
    id: number;
    name: string;
    icon: string;
};

const quickInfo: DataProps[] = [
    {id: 1, name: "Buy New", icon: "/assets/add.svg"},
    {id: 2, name: "Tutorials", icon: "/assets/switch.svg"},
    {id: 3, name: "Demo", icon: "/assets/tutorial.svg"}
];

const Quicklinks = () => {
    return (
        <section className="w-full h-max relative space-y-6">
            <section className="flex items-center justify-between">
                <h3 className="text-white text-xl font-secondary tracking-tight">
                    Quicklinks
                </h3>
                <span className="w-4 h-4">
                    <ChevronRightIcon color="#FFFFFF" />
                </span>
            </section>
            <hr className="w-full h-0.5 bg-neutral-100" />
            <section className="flex justify-between space-x-3">
                {quickInfo.map((singleInfo) => (
                        <Link href={singleInfo.name.toLowerCase()} key={singleInfo.id} className={`${singleInfo.id === 2 ? "cursor-pointer space-y-20 pl-4 py-6 w-1/3 h-max bg-purple-600 text-white rounded-2xl" : "cursor-pointer space-y-20 pl-4 py-6 w-1/3 h-max bg-orange-100 rounded-2xl text-gray-900"}`}>
                            <p className="text-xl font-secondary">
                                {singleInfo.name}
                            </p>
                            <Image 
                                src={singleInfo.icon} 
                                width={36}
                                height={32}
                                className="relative" 
                                alt={singleInfo.name} 
                            />
                        </Link>
                    
                ))}
            </section>
        </section>
    );
};

export default Quicklinks;