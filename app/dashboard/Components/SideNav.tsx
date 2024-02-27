"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarLinkProps {
  id: string; // unique identifier
  icon: string;
  label: string;
  href: string;
}

export const navData: NavbarLinkProps[] = [
  { id: 'home', icon: "/assets/home.svg", label: 'Home', href: "/dashboard" },
  { id: 'documentation', icon: "/assets/doc.svg", label: 'Documentation', href: "/documentation" },
  { id: 'inventory', icon: "/assets/inventory.svg", label: 'Inventory', href: "/inventory" },
  { id: 'videos', icon: "/assets/videos.svg", label: 'Videos', href: "/videos" },
  { id: 'products', icon: "/assets/products.svg", label: 'Products', href: "/products" },
  { id: 'help', icon: "/assets/help.svg", label: 'Help', href: "/help" },
];

const navDataTwo: NavbarLinkProps[] = [
  { id: 'settings', icon: "/assets/settings.svg", label: 'Settings', href: "/settings" },
];

const SideNav = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleLinkClick = (id: string) => {
    setActiveId(id);
  };

  const renderLinks = (links: NavbarLinkProps[]) => {
    return links.map((link) => (
      <section 
        key={link.id} 
        onClick={() => handleLinkClick(link.id)} 
        className={`flex items-center py-8 space-x-4 ${activeId === link.id ? 'text-purple-600 border-l-4 border-purple-600 left-0 -ml-8 pl-8' : 'text-white'}`}
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
    <nav className="w-24 h-screen bg-gray-800 fixed left-0 top-0 lg:hidden">
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
