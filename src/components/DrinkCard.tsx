import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"


type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProps) {

    const selectRecipe= useAppStore((state) => state.selectRecipe)

  return (
    <div className="shadow-lg rounded-lg">
        <div className="overflow-hidden">
            <img 
            src={drink.strDrinkThumb} 
            alt={`Imagen de ${drink.strDrink}`}
            className="rounded-lg hover:scale-125 transition-transform w-full object-cover h-96"
            />
        </div>

        <div className="p-5 ">
            <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
            <button 
                type="button"
                className="bg-orange-400 hover:bg-orange-600 mt-5 w-full p-3 text-white font-bold text-lg"
                onClick={() => selectRecipe(drink.idDrink)}
                >
                Ver Receta
            </button>
        </div>

   
    </div>
  )
}
