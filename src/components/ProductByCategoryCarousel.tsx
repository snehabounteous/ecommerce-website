"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";  
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

interface ProductByCategoryCarouselProps {
  categorySlug: string;
}

const ProductByCategoryCarousel: React.FC<ProductByCategoryCarouselProps> = ({ categorySlug }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/?categorySlug=${categorySlug}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-4">
              <Link href={`/products/${product.id}`} passHref>
                <div className="relative w-full aspect-w-1 aspect-h-1">
                  <Image
                    src={product.images[0]}  
                    alt={product.title}
                    height={300}
                    width={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </Link>
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{`$${product.price}`}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductByCategoryCarousel;
