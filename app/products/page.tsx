import OurProductFade from "./components/OurProductFade";
import OurProducts from "./components/OurProducts";
import SideNav from "../dashboard/components/SideNav";
import TopNav from "../dashboard/components/TopNav";

const pageTitle = "Our Products";

const ProductPage = () => {
    return (
        <section className="bg-gray-900 w-full h-max px-16 py-8 space-y-16">
            <section className="pl-32">
                <TopNav currentTitle={pageTitle} />
            </section>
            <section className="flex items-start space-x-32">
                <SideNav />
                <section className="flex items-center space-x-0">
                    <section className="space-y-16">
                        <OurProducts />
                    </section>
                    <section className="w-fit">
                        <OurProductFade />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default ProductPage;