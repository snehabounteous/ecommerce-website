'use client';

import { useState, useEffect } from 'react';
import { usePLPStore } from '@/stores/plpStrore';
import FiltersSidebar from '@/components/components/FiltersSidebar';
import ProductGrid from '@/components/components/ProductGrid';
import PaginationControls from '@/components/components/PaginationControls';

const PAGE_SIZE = 9;

interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  images: string[];
  category?: {
    id: number;
    name: string;
  };
}
interface Filters {
  categoryId?: number;
  price_min?: number;
  price_max?: number;
  price?: number;
  title?: string;
}
export default function PLPPage() {
  const { filters, setFilters, page, setPage } = usePLPStore();
  
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const fetchTotalAndPageProducts = async (filters: Filters, page: number) => {
    const PAGE_SIZE = 9;
    try {
       const baseParams = new URLSearchParams();
    if (filters.categoryId) baseParams.append('categoryId', filters.categoryId.toString());
    if (filters.price_min) baseParams.append('price_min', filters.price_min.toString());
    if (filters.price_max) baseParams.append('price_max', filters.price_max.toString());
    if (filters.price) baseParams.append('price', filters.price.toString());
    if (filters.title) baseParams.append('title', filters.title);
      const totalRes = await fetch(
        `https://api.escuelajs.co/api/v1/products/?${baseParams.toString()}`
      );
      const totalData = await totalRes.json();
      const total = totalData.length;

      baseParams.append('limit', PAGE_SIZE.toString());
      baseParams.append('offset', ((page - 1) * PAGE_SIZE).toString());

      const paginatedRes = await fetch(
        `https://api.escuelajs.co/api/v1/products/?${baseParams.toString()}`
      );
      const paginatedData = await paginatedRes.json();

      return {
        filters,
        total,
        page,
        products: paginatedData
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return {
        filters,
        total: 0,
        page,
        products: []
      };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { filters: fetchedFilters, total, products } = await fetchTotalAndPageProducts(filters, page);
      setProducts(products);
      setTotal(total);
    };

    fetchData();
  }, [filters, page]);

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4 w-full">
          <FiltersSidebar filters={filters} setFilters={setFilters} />
        </div>

        <div className="lg:w-3/4 w-full">
          <div className="space-y-6">
            <ProductGrid products={products} />
            <PaginationControls
              page={page}
              setPage={setPage}
              total={total}
              pageSize={PAGE_SIZE}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
