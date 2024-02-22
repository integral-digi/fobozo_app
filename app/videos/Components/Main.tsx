"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const pageItems = {
    image: "/assets/empty-state.svg",
    text: "Videos will be added soon",
    buttonText: "Visit Our Youtube"
}

const Main = () => {
    const router = useRouter();

    return (
        <section className="flex justify-center">
            <section className="mx-auto space-y-8">
                <Image
                    src={pageItems.image} 
                    alt={pageItems.text} 
                    width={360}
                    height={540}
                    className="h-auto" 
                />
                <p className="text-center text-white text-xl font-secondary tracking-tight">
                    {pageItems.text}
                </p>
                <button className="h-12 w-full bg-purple-600 rounded-lg justify-center flex items-center" onClick={()=>router.replace("https://www.youtube.com/@fobozo")}>
                    <p className="w-max text-center text-white text-base font-black">{pageItems.buttonText}</p>
                </button>
            </section>
        </section>
    )
}

export default Main;