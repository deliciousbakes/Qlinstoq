import { ProductCardProps } from '@/types/types';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ product }: { product: ProductCardProps }) {
  const { name, imageUrl,id: productId, description, sellingPrice } = product;

  return (
    <article className="group relative">
      <Link href={`/home/products/${productId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            fill
            sizes="(max-width: 600px) 90vw, (max-width: 800px) 50vw"
            alt={name}
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {name.substring(0, 30)}
          </h3>
        </div>
        <p className="text-sm mt-1 text-muted-foreground ">
          {description.substring(0, 40)}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1 ">
            <span className="font-semibold">
              {formatCurrency(sellingPrice)}
            </span>
          </p>
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-5">
     </div>
    </article>
  );
}
export default ProductCard;