import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const firstImage = product.image_list[0];

  return (
    <article className="flex h-full w-full flex-col rounded-lg bg-tertiary-background p-4 shadow-lg hover:bg-tertiary-background-hover">
      <Link
        href={`/catalog/${product.id}`}
        className="flex h-full w-full flex-col"
        aria-label={`Ver detalles de ${product.brand} ${product.model}`}
      >
        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-md">
          <Image
            className="h-full w-full object-contain"
            src={firstImage || "/placeholder.svg"}
            width={300}
            height={225}
            alt={`${product.brand} ${product.model}`}
            priority={false}
            loading="lazy"
          />
        </div>
        <div className="mt-3 flex flex-grow flex-col text-center">
          <p className="text-md font-light text-primary-text md:text-lg">
            {product.brand}
          </p>
          <h3 className="text-md flex min-h-[2.5rem] items-center justify-center font-semibold text-primary-text md:min-h-[3rem] md:text-lg">
            {product.model}
          </h3>
          <p className="mt-auto pt-2 text-sm text-secondary-text md:text-lg">
            USD{" "}
            {new Intl.NumberFormat("es-ES", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
