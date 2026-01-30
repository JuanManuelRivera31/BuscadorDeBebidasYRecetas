import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice } from "./recipeSlice";
import type { RecipesSliceType } from "./recipeSlice";


export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({ //Parametros - Argumentos de la funcion create
    ...createRecipeSlice(...a)
})))