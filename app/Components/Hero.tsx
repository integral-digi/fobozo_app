"use client"

// Importing the necessary modules
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

// Define heroItems object
const heroItems = {
    name: "fobozo",
    title: "Elevate your FiveM experience with Fobozo",
    subtitle: "Elevate your FiveM experience with Fobozo's cutting-edge custom scripts. Our robust and customizable solutions are designed to enhance your gaming environment, offering a wide range of features that will take your FiveM server to the next level. From immersive gameplay enhancements to advanced admin tools, Fobozo empowers you to create a unique and thrilling gaming experience for your players. Experience the future of FiveM scripting with Fobozo today!",
    buttonOne: {
        name: "Buy now",
        href: "/products"
    },
    buttonTwo: {
        name: "What's new",
        href: "/blog"
    },
    heroImg: {
        name: "illustration",
        src: "/assets/illustration.svg",
    }
};

// Defining motion animation variants
const fadeInRight = {
    initial: { opacity: 0, translateX: "-200px" },
    animate: { opacity: 1, translateX: 0 },
    transition: { duration: 2, delay: 1, ease: "linear", type: "spring" },
};

const bounceSoftStyle = {
    initial: { 
      opacity: 0,
      y: -20,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        damping: 100, // Adjust the damping for the bounce effect
        stiffness: 100, // Adjust the stiffness for the bounce effect
      },
    },
  };

// Hero component
const Hero = () => {
    const { name, title, subtitle, buttonOne, buttonTwo, heroImg } = heroItems;
    const router = useRouter();

    return (
        <section className="space-y-16">
            <section className="space-y-8 mx-auto">
                <section className="text-center text-purple-600 text-lg font-black">
                    <p>{name}</p>
                </section>
                <motion.section
                    className="flex items-center justify-center"
                    variants={fadeInRight}
                    initial="initial"
                    animate="animate"
                >
                    <p className="text-center text-6xl text-white font-black w-[60%] lg:text-3xl">{title}</p>
                </motion.section>
                <section className="flex items-center justify-center">
                    <p className="text-white text-center font-primary w-[70%]">{subtitle}</p>
                </section>
                <section className="flex items-center space-x-8 justify-center">
                    <button className="flex items-center justify-around border border-orange-100 rounded-3xl h-12 w-32 hover:bg-white hover:text-white" onClick={() => router.push(buttonOne.href)}>
                        <p className="text-orange-100 font-primary hover:text-white">{buttonOne.name}</p>
                    </button>
                    <button className="flex items-center" onClick={() => router.push(buttonTwo.href)}>
                        <p className="text-white font-primary">{buttonTwo.name}</p>
                    </button>
                </section>
            </section>
            <motion.section 
                className="mx-auto"
                variants={bounceSoftStyle}
                initial="initial"
                animate="animate"
            >
                <Image
                    src="/assets/gta.svg"
                    alt={heroImg.name}
                    height={640}
                    width={1360}
                />
            </motion.section>
            <section className="flex justify-center">
                <Image
                    src="/assets/gta.svg"
                    alt="gta logo"
                    width={224}
                    height={32}
                />
            </section>
        </section>
    );
};

export default Hero;