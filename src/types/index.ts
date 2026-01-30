import { z } from 'zod';
import { CategoriesAPIResponseSchema } from '../utils/recipesSchema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;

export type CategoriesAPIResponse = z.infer<typeof CategoriesAPIResponseSchema>;