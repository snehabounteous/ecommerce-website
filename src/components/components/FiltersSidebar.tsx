"use client";


import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

interface Filters {
  categoryId?: number;
  price_min?: number;
  price_max?: number;
  price?: number;
  title?: string;
}

interface FilterProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}
const FiltersSidebar: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleApply = () => {
    setFilters(localFilters);
  };

  return (
    <Card className="w-full p-4 space-y-4">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">Category ID</label>
          <Input
            type="number"
            value={localFilters.categoryId ?? ""}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, categoryId: e.target.value ? +e.target.value : undefined })
            }
          />
        </div>

        <Separator />

        <div>
          <label className="text-sm font-medium">Price Range</label>
          <div className="flex gap-2 mt-1">
            <Input
              placeholder="Min"
              type="number"
              value={localFilters.price_min ?? ""}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, price_min: e.target.value ? +e.target.value : undefined })
              }
            />
            <Input
              placeholder="Max"
              type="number"
              value={localFilters.price_max ?? ""}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, price_max: e.target.value ? +e.target.value : undefined })
              }
            />
          </div>
        </div>

        <Separator />

        <div>
          <label className="text-sm font-medium">Exact Price</label>
          <Input
            type="number"
            value={localFilters.price ?? ""}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, price: e.target.value ? +e.target.value : undefined })
            }
          />
        </div>

        <Separator />

        <div>
          <label className="text-sm font-medium">Title</label>
          <Input
            type="text"
            value={localFilters.title ?? ""}
            placeholder="e.g. Generic"
            onChange={(e) =>
              setLocalFilters({ ...localFilters, title: e.target.value || undefined })
            }
          />
        </div>

        <Button onClick={handleApply} className="w-full">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default FiltersSidebar;
