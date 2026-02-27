import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { RecipesSliceType } from "./recipeSlice";
import { createRecipeSlice} from "./recipeSlice";
import type { FavoritesSliceType } from "./favoritesSlice";
import { createFavoritesSlice} from "./favoritesSlice";

//La función create de zustand se encarga de crear el store, le pasamos el tipo de los slices que vamos a usar, y luego le pasamos una función que combina los slices, 
// usando el operador spread para combinar las funciones de cada slice en una sola función que se le pasa a create. 
export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({ //Parametros - Argumentos de la funcion create
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a)
})))