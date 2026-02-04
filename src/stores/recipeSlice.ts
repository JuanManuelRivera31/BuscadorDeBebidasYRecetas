import type { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../service/RecipeService";
import type { Categories, Drinks, SearchFilter } from "../types";

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilters: SearchFilter) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({ //Le hacemos saber al stateprincipal que forma van a tener los slices
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories= await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks= await getRecipes(filters)
        set({
            drinks
        })
    }
})