import React from "react";
import Link from "next/link";

const FeaturedBrands = () => {
  const brandList = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://res.cloudinary.com/dyifeei20/image/upload/v1745945030/iPhone-16-Pro-Max-2_ayoy53.webp",
    },
    {
      id: 2,
      name: "Samsung",
      image:
        "https://res.cloudinary.com/dyifeei20/image/upload/v1744924784/Samsung-Galaxy-S25-Plus-Main_tibfyg.webp",
    },
    {
      id: 3,
      name: "Xiaomi",
      image:
        "https://res.cloudinary.com/dyifeei20/image/upload/v1745263610/Xiaomi-15-Ultra-1_fvstcj.webp",
    },
    {
      id: 4,
      name: "Motorola",
      image:
        "https://res.cloudinary.com/dyifeei20/image/upload/v1747843263/Edge-50-Ultra-Wood_ggjuoj.webp",
    },
    {
      id: 5,
      name: "Realme",
      image:
        "https://res.cloudinary.com/dyifeei20/image/upload/v1747844657/Realme-GT6_yhmzai.webp",
    },
    {
      id: 6,
      name: "Infinix",
      image:
        "https://res.cloudinary.com/dyifeei20/image/upload/v1746550068/Infinix-GT20-Pro-1_yipmi4.webp",
    },
    {
      id: 7,
      name: "TECNO",
      image:
        "https://res.cloudinary.com/dyifeei20/image/upload/v1746560010/TECNO-Camon-30S-Pro_owroc5.webp",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-2 text-center text-lg font-bold text-primary-text md:mb-10 md:text-2xl">
        Encontrá los celulares de tus marcas preferidas
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {brandList.map((brand) => (
          <Link
            key={brand.id}
            href={`/catalog?category=Smartphone&brand=${brand.name}`}
            className="group flex h-full flex-col items-center justify-between rounded-2xl bg-tertiary-background p-4 text-center transition-colors hover:bg-tertiary-background-hover"
          >
            <p className="mb-2 text-lg font-semibold text-primary-text">
              {brand.name}
            </p>
            <div className="flex h-36 w-full items-center justify-center overflow-hidden">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
