"use client"
import React, { useMemo } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import AccDropdown from "./AccountDropdown";
import Image from "next/image";

const user = {
  username: "Fobozo",
  avatar: "/assets/fbz.png",
};

interface TopNavProps {
  currentTitle: string;
}

interface NavItem {
  name: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { name: "search", icon: <BellIcon color="#ffffff" className="w-6 h-6" /> },
  { name: "notify", icon: <MagnifyingGlassIcon color="#ffffff" className="w-6 h-6" /> },
];

const TopNav: React.FC<TopNavProps> = ({ currentTitle }) => {
  const memoNavItems = useMemo(() => {
    return navItems.map((item) => (
      <button key={item.name}>
        {item.name === "search" ? (
          <Popover data-popover-target="search-field" className="relative">
            <Popover.Button>{item.icon}</Popover.Button>
            <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel id="search-field" className="absolute">
                {/* <SearchModal /> */}
              </Popover.Panel>
            </Transition>
          </Popover>
        ) : (
          <span>{item.icon}</span>
        )}
      </button>
    ));
  }, []);

  return (
    <section className="flex items-center w-full h-12 relative justify-between">
      <section className="flex items-center space-x-5">
        <h2 className="text-white text-3xl lg:text-3xl">
          {currentTitle}
        </h2>
      </section>
      <section className="flex items-center space-x-6">
        <section className="space-x-6 lg:hidden">{memoNavItems}</section>
        <section className="w-px h-8 relative border-neutral-200" />
        <section className="space-x-4 flex items-center">
          <p className="text-right text-white text-sm font-secondary leading-tight tracking-tight lg:hidden">
            {user.username}
          </p>
          <Popover data-popover-target="AccDrop" className="relative lg:hidden">
            <Popover.Button className="relative">
              <section className="w-12 h-12 rounded-full border-2 border-orange-100 flex items-center">
                <Image
                  src={user.avatar}
                  alt={user.username}
                  width={36}
                  height={36}
                  className="rounded-full m-auto"
                />
              </section>
            </Popover.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -ml-40 mt-2 z-20" id="AccDrop">
                <AccDropdown />
              </Popover.Panel>
            </Transition>
          </Popover>
        </section>
      </section>
    </section>
  );
};

export default TopNav;
