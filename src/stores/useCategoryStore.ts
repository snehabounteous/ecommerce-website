import { create } from 'zustand';

interface CategoryState {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: 'clothes',  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
