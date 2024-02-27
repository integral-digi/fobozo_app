import { pricingTwo, PricingItem } from './Products';
import ProductCard from './ProductCard';

const OurProducts: React.FC = () => {
  return (
    <section>
      <section className="bg-purple-600 flex items-baseline p-12 rounded-tl-3xl rounded-bl-3xl space-x-16 space-y-12 lg:block lg:max-w-full lg:rounded-3xl">
        {pricingTwo.map((single: PricingItem) => (
          <ProductCard key={single.id} product={single} />
        ))}
      </section>
    </section>
  )
}

export default OurProducts;