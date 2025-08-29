"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import Loading from "../../../ui/Loading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { useCartStore } from "@/stores/useCartStore"; 
import { Button } from "@/components/ui/button";

interface ProductDetail {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const addItem = useCartStore((state) => state.addItem); // <-- access addItem from store

  useEffect(() => {
    if (!id) return;

    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{`$${product.price}`}</CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <Image
              src={product.images[0]}
              alt={product.title}
              layout="responsive"
              width={800}
              height={800}
              className="rounded-lg object-cover"
            />
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">{product.description}</p>

            <Button
              onClick={handleAddToCart}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Add to Cart
            </Button>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.images.slice(1).map((image, idx) => (
                <div key={idx} className="relative w-full aspect-w-1 aspect-h-1">
                  <Image
                    src={image}
                    alt={`Product Image ${idx + 1}`}
                    layout="responsive"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
