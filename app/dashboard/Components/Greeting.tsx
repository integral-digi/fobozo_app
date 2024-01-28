import Image from "next/image";
import { timeOfDay } from "./time";

const wave = {
    source: "/assets/hand.svg",
    alt: "waving hand"
}

const Greeting = () => {
    return (
        <section className="flex items-center space-x-5">
            <h2 className="text-white dark:text-white text-5xl font-black lg:text-3xl">
                Good {timeOfDay}, Fobozo
            </h2>
            <Image 
                src={wave.source} 
                alt={wave.alt} 
                width={48} 
                height={48} 
            />
        </section>
    )
}

export default Greeting;