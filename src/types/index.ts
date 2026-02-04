import { z } from 'zod';
import { CategoriesAPIResponseSchema, DrinkAPIResponseSchema, DrinksAPIResponseSchema, SearchFiltersSchema } from '../utils/recipesSchema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;

export type SearchFilter = z.infer<typeof SearchFiltersSchema>;

export type Drinks= z.infer<typeof DrinksAPIResponseSchema>;

export type Drink= z.infer<typeof DrinkAPIResponseSchema>;