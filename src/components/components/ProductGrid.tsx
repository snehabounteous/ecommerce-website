"use client";


import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/stores/useCartStore"; 
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="hover:shadow-md transition cursor-pointer">
          <CardHeader className="p-0">
            <Link href={`/products/${product.id}`}>
              <div className="relative w-full h-60 overflow-hidden rounded-t-md">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </CardHeader>
          <CardContent className="p-4 space-y-2">
            <CardTitle className="text-base">{product.title}</CardTitle>
            <p className="text-sm text-gray-500">${product.price}</p>

            <Button
              onClick={() =>
                addItem({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.images[0],
                })
              }
              className="w-full bg-primary text-white hover:bg-green-600"
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
