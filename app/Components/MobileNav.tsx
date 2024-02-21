import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const MobileNav = () => {
    return (
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
                <Bars3CenterLeftIcon className="text-white w-6 h-6" />
            </section>
        </section>
    )
}

export default MobileNav;