import ProductMeter from "./ProgressMeter"

const OwnedProducts = () => {
    return (
        <section className="w-full space-y-5">
            <h3 className="text-white text-xl font-secondary tracking-tight">
                Products Owned
            </h3>
        <section className="w-full left-0">
            <ProductMeter bgcolor="#9A00FF" progress='30' height={8} />
        </section>
    </section>
    )
}

export default OwnedProducts;