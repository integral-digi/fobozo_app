"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { id: 1, name: "Settings", icon: "/assets/settings.svg" },
  { id: 2, name: "Help", icon: "/assets/help.svg" },
  { id: 3, name: "Logout", icon: "/assets/logout.svg" },
];

const AccDropdown = () => {
  const [authUser, setAuthUser] = useState(true);

  const handleClick = () => {
    setAuthUser(!authUser);
  };

  return (
    <div className="w-60 h-52 relative bg-gray-800 rounded-xl shadow-2xl before:content-none before:absolute">
      <nav className="space-y-7 pl-8 pt-8">
        {menuItems.map((item) => (
          <div className="flex items-center space-x-5" key={item.id}>
            {item.id === 2 ? (
              <>
                <Image 
                  src={item.icon} 
                  alt={item.name} 
                  width={16}
                  height={16}
                  className="relative" 
                />
                <p className="text-white text-base font-secondary">{item.name}</p>
              </>
            ) : item.id === 1 ? (
              <>
                <Link href="/account" passHref className="flex items-center space-x-5">
                    <Image 
                      src={item.icon} 
                      alt={item.name} 
                      width={16}
                      height={16}
                      className="relative" 
                    />
                    <p className="text-white text-base font-secondary">{item.name}</p>
                </Link>
              </>
            ) : (
              <>
                <Link href="/secure-login" passHref className="flex items-center space-x-5">
                    <Image 
                      src={item.icon} 
                      alt={item.name} 
                      width={16}
                      height={16}
                      className="relative" 
                    />
                    <p className="text-white text-base font-secondary">{item.name}</p>
                </Link>
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default AccDropdown;
