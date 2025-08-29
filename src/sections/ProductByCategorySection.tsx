import ProductByCategoryCarousel from "@/components/components/ProductByCategoryCarousel";
import React from "react";


const ProductByCategorySection = () => {
  const categories = [
    { slug: "clothes", name: "Clothes" },
    { slug: "shoes", name: "Shoes" },
    { slug: "electronics", name: "Electronics" },
    { slug: "furniture", name: "Furniture" },
    { slug: "miscellaneous", name: "Miscellaneous" },
  ];

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.slug} className="space-y-4">
          <h2 className="text-2xl font-bold">{category.name}</h2>
          <ProductByCategoryCarousel categorySlug={category.slug} />
        </div>
      ))}
    </div>
  );
};

export default ProductByCategorySection;
