"use client"
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import MenuTray from "./MenuTray";
import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const MobileNav = () => {
    return (
        <section className="hidden lg:block">
            <section className="flex items-center justify-between w-full">
                <section>
                    <Image
                        src="/assets/logomain.svg" 
                        alt="fobozologo" 
                        width={28}
                        height={24}
                    />
                </section>
                <Popover data-popover-target="MenuTray">
                    <Popover.Button>
                        <section>
                            <Bars3CenterLeftIcon className="text-white w-6 h-6" />
                        </section>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel id="MenuTray" className="fixed top-0 left-0 w-full">
                            <MenuTray />
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </section>
        </section>
    )
}

export default MobileNav;