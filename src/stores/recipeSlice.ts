import type { StateCreator } from "zustand";
import { getCategories } from "../service/RecipeService";
import type { Categories } from "../types";

export type RecipesSliceType = {
    categories: Categories
    fetchCategories?: () => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({ //Le hacemos saber al stateprincipal que forma van a tener los slices
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories= await getCategories()
        set({
            categories
        })
    }
});