import Image from "next/image";
import { features, pricingThree, PricingItem } from "./Products";

const OurProductFade = () => {
    return (
        <section className="bg-orange-100 block px-28 py-24 rounded-3xl space-y-24">
            {pricingThree.map((single: PricingItem) => (
                <section key={single.id} className="space-y-3 w-full">
                    <section className="space-y-3">
                        <h2 className="text-gray-900 font-secondary text-3xl">
                            {single.name}
                        </h2>
                        <p className="text-gray-900 font-primary">{single.description}</p>
                    </section>
                    <section className="flex items-baseline space-x-2">
                        <h2 className="text-gray-900 font-secondary text-5xl">
                            {single.amount}
                        </h2>
                        <p className="text-orange-100 font-primary">
                            /one time
                        </p>
                    </section>
                    <hr className="w-72 h-0.5 bg-neutral-300" />
                    <section className="space-y-6">
                        {features.map((feature: string, index: number) => (
                            <section className="flex items-center space-x-4 space-y-4" key={index}>
                                <Image 
                                    src="/assets/tick-dark.svg" 
                                    alt="tick" 
                                    width={16}
                                    height={16}
                                />
                                <p className="text-gray-900 font-primary">{feature}</p>
                            </section>
                        ))}
                        <button className="justify-around border border-gray-900 rounded-3xl h-12 px-8">
                            <p className="text-gray-900 text-base font-black hover:bg-orange-100 hover:text-gray-900">Purchase</p>
                        </button>
                    </section>
                </section>
            ))}
        </section>
    )
}

export default OurProductFade;