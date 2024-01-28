"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarLinkProps {
  icon: string;
  label: string;
  href: string;
}

const navData: NavbarLinkProps[] = [
  { icon: "/assets/home.svg", label: 'Home', href: "/dashboard" },
  { icon: "/assets/doc.svg", label: 'Documentation', href: "/documentation" },
  { icon: "/assets/inventory.svg", label: 'Inventory', href: "/inventory" },
  { icon: "/assets/videos.svg", label: 'Videos', href: "/videos" },
  { icon: "/assets/products.svg", label: 'Products', href: "/products" },
  { icon: "/assets/help.svg", label: 'Help', href: "/help" },
];

const navDataTwo: NavbarLinkProps[] = [
  { icon: "/assets/settings.svg", label: 'Settings', href: "/settings" },
];

const SideNav = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleLinkClick = (index: number) => {
    setActiveId(index);
  };

  const renderLinks = (links: NavbarLinkProps[]) => {
    return links.map((link, index) => (
      <section 
        key={link.label} 
        onClick={() => handleLinkClick(index)} 
        className={`flex items-center py-8 space-x-4 ${index === activeId ? 'text-purple-600 border-l-4 border-purple-600 left-0 -ml-8 pl-8' : 'text-white'}`}
      >
        <Link href={link.href}>
          <Image 
            src={link.icon} 
            width={24}
            height={24}
            alt={link.label} 
          />
        </Link>
      </section>
    ));
  };

  return (
    <nav className="w-24 h-screen bg-gray-800 fixed left-0 top-0">
      <section className='relative mx-auto px-8 py-12 justify-center items-center space-y-16'>
        <section className='cursor-pointer'>
          <Image 
            src='/assets/logomain.svg' 
            alt='logo' 
            width={36} 
            height={36} 
          />
        </section>
        <section>
          {renderLinks(navData)}
        </section>
        <section>
          {renderLinks(navDataTwo)}
        </section>
      </section>
    </nav>
  );
};

export default SideNav;
