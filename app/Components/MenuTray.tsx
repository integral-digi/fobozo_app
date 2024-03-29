import { navChildren } from "./Nav";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Popover } from "@headlessui/react";

const MenuTray = () => {
    const router = useRouter();
    return (
        <section className="space-y-8 bg-gray-900 w-full h-full min-h-screen z-50">
            <section className="space-y-32 px-36 py-16 lg:px-8 lg:space-y-24">
                <section className="flex items-center justify-between w-full">
                    <section>
                        <Image
                            src="/assets/logomain.svg" 
                            alt="fobozologo" 
                            width={28}
                            height={24}
                        />
                    </section>
                    <section>
                        <Popover.Button>
                            <p className="text-lg text-white font-black cursor-pointer">
                                close
                            </p>
                        </Popover.Button>
                    </section>
                </section>
                {navChildren.map((item, index) => (
                    <motion.p 
                        className="text-6xl text-white font-black cursor-pointer lg:text-4xl" 
                        key={index} onClick={()=>router.push(item.href)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, delay: 0.5 }}
                        exit={{ opacity: 0 }}
                    >
                        {item.name.toUpperCase()}
                    </motion.p>
                ))}
                </section>
            </section>
    )
}

export default MenuTray;