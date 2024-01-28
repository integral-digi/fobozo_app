import Image from 'next/image';
import { features, PricingItem } from './Products';

interface ProductCardProps {
  product: PricingItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, description, amount } = product;

  return (
    <section className="space-y-3 w-1/2">
      <section className="space-y-3">
        <h2 className="text-white font-secondary text-3xl">{name}</h2>
        <p className="text-white font-primary">{description}</p>
      </section>
      <section className="flex items-baseline space-x-2">
        <h2 className="text-white font-secondary text-5xl">{amount}</h2>
        <p className="text-orange-100 font-primary">/one time</p>
      </section>
      <hr className="w-72 h-0.5 bg-neutral-300" />
      <section className="space-y-6">
        {features.map((feature, index) => (
          <section className="flex items-center space-x-4 space-y-4" key={index}>
            <Image 
              src="/assets/tick.svg" 
              alt="tick" 
              width={16}
              height={16}
            />
            <p className="text-white font-primary">{feature}</p>
          </section>
        ))}
        <button className="justify-around border border-white rounded-3xl h-12 px-8">
          <p className="text-white text-base font-black hover:bg-orange-100 hover:text-gray-900">
            Purchase
          </p>
        </button>
      </section>
    </section>
  );
};

export default ProductCard;
