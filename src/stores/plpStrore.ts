import { create } from 'zustand';

interface FilterState {
  categoryId?: number;
  price_min?: number;
  price_max?: number;
  price?: number;
  title?: string;
}

interface PLPStore {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;

  page: number;
  setPage: (page: number) => void;
}

export const usePLPStore = create<PLPStore>((set) => ({
  filters: {},
  setFilters: (filters) => set({ filters }),

  page: 1,
  setPage: (page) => set({ page }),
}));
