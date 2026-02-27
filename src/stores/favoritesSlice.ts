import type { StateCreator } from 'zustand';
import type { Recipe } from '../types';

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)) { //Get para acceder al estado actual, some para verificar si la receta ya existe en favoritos comparando el idDrink
            set((state) => ({
                favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink) //Si la receta ya existe, se filtra el array de favoritos para eliminarla
            }))
             console.log('Receta eliminada de favoritos');
        }
        else {
            set((state) => ({ //Callback para actualizar el state, recibe el estado actual y retorna un nuevo estado con la receta agregada a favoritos
                // favorites: [...get().favorites, recipe] Otra forma de acceder al estado actual es usando get() en lugar de state, ambos son válidos
                favorites: [...state.favorites, recipe]
            }))
             console.log('Receta agregada a favoritos');
        }
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id) //Some para verificar si existe una receta con el id dado en el array de favoritos, devuelve true o false
    }
})