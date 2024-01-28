import { HeartIcon } from "@heroicons/react/20/solid"
import Image from "next/image"

const inventoryItems = [
    { id: 1, name: "Drugsfarm", href: "/products", image: "/assets/drugsfarm.jpg" },
    { id: 2, name: "Garages", href: "/products", image: "/assets/garages.jpg" }, 
]

const InvSingle = () => {
    return (
        <section className="flex flex-1 flex-wrap space-x-8 space-y-8 items-baseline">
            {inventoryItems.map((item) => (
                <section key={item.id} className="rounded-2xl overflow-hidden border-2 border-gray-300 h-fit">
                    <Image 
                        src={item.image} 
                        height={200} 
                        width={400} 
                        alt={`Image of ${item.name}`} 
                        className="h-[200px]"
                    />
                    <section className="p-4 bg-purple-600 flex items-center justify-between">
                        <p className="font-secondary text-base text-white">
                            {item.name}
                        </p>
                        <HeartIcon color="#FF0000" className="w-6 h-6" />
                    </section>
                </section>
            ))}
        </section>
    )
}

export default InvSingle;