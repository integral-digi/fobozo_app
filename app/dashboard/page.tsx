//Dashboard page
"use client"
import Link from "next/link";
import Wishlist from "./components/Wishlist";
import TopNav from "./components/TopNav";
import Greeting from "./components/Greeting";
import ProductMeter from "./components/ProgressMeter";
import SideNav from "./components/SideNav";
import Quicklinks from "./components/Quicklinks";

const pageVitals = {
    productsOwned: 6,
    totalproducts: 8
}

const DashPage = () => {
    return (
        <section className="w-full bg-gray-900 relative space-y-32 lg:w-full">
            <section className="top-0 px-32 pt-6 lg:px-8">
                <TopNav currentTitle="" />
            </section>   
            <section className="pl-72">
                <Greeting /> 
            </section>     
            <section className="flex items-start justify-between pb-24 lg:block">
                <section className="w-24 lg:hidden">
                    <SideNav />
                </section>
                <section className="px-32 space-y-32 w-1/2">   
                    <section className="space-y-24 w-full">
                        <section className="space-y-8">
                            <section className="flex items-center justify-between">
                                <p className="text-white text-base font-secondary">
                                    Products Owned
                                </p>
                                <section className="flex items-center space-x-6">
                                    <p className="text-white text-base font-secondary">
                                        {pageVitals.productsOwned}/{pageVitals.totalproducts}
                                    </p>
                                    <Link href="/products" passHref>
                                        <p className="underline text-purple-600 text-base font-secondary">Buy now</p>
                                    </Link>
                                </section>
                            </section>
                            <section>
                                <ProductMeter height={8} bgcolor="#9A00FF" progress={80} />
                            </section>
                        </section>
                        <Quicklinks />
                    </section>
                </section>
                <section className="w-fit pr-32">
                    <Wishlist />
                </section>
            </section>
        </section>
    );
};

export default DashPage;
