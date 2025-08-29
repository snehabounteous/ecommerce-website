"use client";

import React, { useEffect, useState } from "react";
import { useCategoryStore } from "@/stores/useCategoryStore";
import ProductCarousel from "../../../ui/Carousel";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

const HeroClient = () => {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductsByCategorySlug(slug: string) {
      setLoading(true);

      try {
        // Fetch all categories once to map slug to id
        const catRes = await fetch("https://api.escuelajs.co/api/v1/categories");
        if (!catRes.ok) throw new Error("Failed to fetch categories");
        const categories: Category[] = await catRes.json();

        const category = categories.find((c) => c.slug === slug);
        if (!category) {
          console.warn(`Category with slug "${slug}" not found.`);
          setProducts([]);
          setLoading(false);
          return;
        }

        // Now fetch products by category id
        const prodRes = await fetch(
          `https://api.escuelajs.co/api/v1/categories/${category.id}/products`,
          { cache: "no-store" }
        );

        if (!prodRes.ok) {
          console.error(`Failed to fetch products for category ID ${category.id}`);
          setProducts([]);
          setLoading(false);
          return;
        }

        const data = await prodRes.json();
        setProducts(Array.isArray(data) ? data.slice(0, 5) : []);
      } catch (err) {
        console.error("Failed to fetch products by category", err);
        setProducts([]);
      }
      setLoading(false);
    }

    if (selectedCategory) {
      fetchProductsByCategorySlug(selectedCategory);
    }
  }, [selectedCategory]);

  if (loading) return <div>Loading...</div>;

  if (products.length === 0) return <div>No products found.</div>;

  return <ProductCarousel products={products} />;
};

export default HeroClient;
