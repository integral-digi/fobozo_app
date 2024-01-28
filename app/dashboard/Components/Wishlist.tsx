import { ChevronRightIcon, HeartIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const wishlistItems = [
    { id: 1, name: "Drugsfarm", href: "/products", image: "/assets/drugsfarm.jpg" },
    { id: 2, name: "Garages", href: "/products", image: "/assets/garages.jpg" },
];

const Wishlist = () => {
    return (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <section className="flex items-center justify-between">
                <h3 className="text-white text-xl font-secondary tracking-tight">
                    My Wishlist
                </h3>
                <span className="w-4 h-4">
                    <ChevronRightIcon color="#FFFFFF" />
                </span>
            </section>
            <hr className="w-full h-0.5 bg-neutral-100" />
            {wishlistItems.map((item) => (
                <section key={item.id} className="rounded-2xl overflow-hidden border-2 border-gray-300">
                    <Image 
                        src={item.image} 
                        height={200} 
                        width={400} 
                        alt={`Image of ${item.name}`} 
                    />
                    <section className="p-4 bg-purple-600 flex items-center justify-between">
                        <p className="font-secondary text-base text-white">
                            {item.name}
                        </p>
                        <HeartIcon color="#FFFFFF" className="w-4 h-4" />
                    </section>
                </section>
            ))}
        </section>
    );
};

export default Wishlist;
