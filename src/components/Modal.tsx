import { Dialog, Transition } from '@headlessui/react';
import { Fragment, type JSX } from 'react';
import { useAppStore } from '../stores/useAppStore';

export default function Modal() {

    const modal = useAppStore((state) => state.modal)
    const closeModal = useAppStore((state) => state.closeModal)
    const selectedRecipe = useAppStore((state) => state.selectedRecipe)

  const renderIngredients = () => {
    const ingredients : JSX.Element[] = []; 

    for (let i = 1; i <= 6; i++) { //Iteramos dinamicamente en el rango de los posibles ingredientes y cantidades que permite la api
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof typeof selectedRecipe]; //Keyoff utiliza cualquiera de los atributos que pertenencen al type
      const measure = selectedRecipe[`strMeasure${i}` as keyof typeof selectedRecipe];
      
      if (ingredient && measure) {
        ingredients.push( //No se recomienda usar push en React, pero en este caso es una forma sencilla de agregar elementos a un array que luego se renderiza
          <li key={i} className="text-lg font-normal">
            {ingredient} - {measure}
          </li>
        );
      }
  }
  return <ul className="my-5">{ingredients}</ul>;
}
return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop:blur-md bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {selectedRecipe.strDrink}
                  </Dialog.Title>

                    <img
                      src={selectedRecipe.strDrinkThumb}
                      alt={`Imagen de ${selectedRecipe.strDrink}`}
                      className="mx-auto w-96"
                    />

                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </Dialog.Title>

                  {renderIngredients()}

                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </Dialog.Title>

                    <p className='text-lg'>{selectedRecipe.strInstructions}</p>

                  <div className="mt-5 flex justify-between gap-4">
                    <button
                      type="button"
                      className="w-full rounded bg-red-700 p-3 uppercase text-white font-bold shadow hover:bg-red-500"
                      onClick={closeModal}
                    >Cerrar
                    </button>

                    <button
                      type="button"
                      className="w-full rounded bg-orange-500 p-3 uppercase text-white font-bold shadow hover:bg-orange-400"
                      onClick={closeModal}
                    >Agregar a favoritos
                    </button>

                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}