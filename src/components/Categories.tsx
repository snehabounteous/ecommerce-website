"use client";

import { IconChevronDown } from "@tabler/icons-react";  
import CTAButtonLight from "../ui/CTAButtonLight";
import { useEffect, useState } from "react";

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resp = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await resp.json();
        setCategories(data.slice(0,5));  // only first 5 categories
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex gap-4 w-[80%] justify-between mx-auto">
      {categories.map((category) => (
        <div key={category.id}>
          <CTAButtonLight
            text={category.name}
            icon={<IconChevronDown />}
            className="w-full rounded-4xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
