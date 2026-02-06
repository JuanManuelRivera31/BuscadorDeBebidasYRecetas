import type { StateCreator } from "zustand";
import { getCategories, getRecipeById, getRecipes } from "../service/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({ //Le hacemos saber al state principal que forma van a tener los slices
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },

    selectedRecipe: {} as Recipe //Añade los atributos del type de forma automatica, no hay necesidad de agg
    ,
    modal: false,
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
    },
    selectRecipe: async (id) => {
        const selectedRecipe= await getRecipeById(id)
        console.log(selectedRecipe)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe //Limpiar la receta seleccionada para evitar que se muestre la anterior al abrir el modal de otra receta
        })
    }
})