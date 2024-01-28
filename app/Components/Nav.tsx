"use client"
import Image from "next/image";
//the main navugation menu on the fobozo homepage
import Link from "next/link";

interface NavChild {
    id: number;
    name: string;
    href: string;
}

interface ButtonInfo {
    name: string;
    icon: string;
}

//this array houses the main navigation links
const navChildren: NavChild[]  = [
    { id: 1, name: "Documentation", href: "/docs" },
    { id: 2, name: "Products", href: "/products" },
    { id: 3, name: "Inventory", href: "/inventory" },
];

//discord button info
const buttonInfo: ButtonInfo  = {
    name: "Sign in with Discord",
    icon: "/assets/discord.svg",
};

const Nav: React.FC = () => {
    return (
        <nav className="w-full flex items-center justify-between pt-12 lg:hidden">
            <section className="w-full flex items-center space-x-20">
                <section>
                    <Image
                        src="/assets/logomain.svg" 
                        alt="fobozologo" 
                        width={28}
                        height={24}
                    />
                </section>
                 {/* mapping the primary navigation links */}
                {navChildren.map((child) => (
                    <section className="flex items-center space-x-20" key={child.id}>
                        <Link href={child.href}>
                            <p className="text-base text-white font-primary">{child.name}</p>
                        </Link>
                    </section>
                ))}
            </section>
            <section>
                <button className="flex items-center space-x-2">
                    <Image 
                        src={buttonInfo.icon} 
                        alt="discord icon" 
                        width={24}
                        height={24}
                    />
                    <p className="whitespace-nowrap text-white font-primary">
                        {buttonInfo.name}
                    </p>
                </button>
            </section>
        </nav>
    );
};

export default Nav;