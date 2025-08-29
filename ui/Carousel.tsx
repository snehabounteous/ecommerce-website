"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/components/ui/carousel";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface CarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<CarouselProps> = ({ products }) => {
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  if (products.length === 0) return null;

  return (
    <div className="relative w-full mx-auto">
      <Carousel>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                {!loadedImages[product.id] && (
                  <Skeleton
                    height="100%"
                    width="100%"
                    baseColor="#e0e0e0"
                    highlightColor="#f5f5f5"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                )}
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  onLoadingComplete={() => handleImageLoad(product.id)}
                  className={`object-cover transition-opacity duration-300 ${
                    loadedImages[product.id] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full" />
        <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
