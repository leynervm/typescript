// import { GitHubAPIResponse } from '../interfaces/response.interface'

// Obtener un elemento del html verificando si existe
// const canvas = document.getElementById('canvas')

// null sino lo encuentra
// HTMLElment si lo encuentra

// Como sabe TypeScript que realmente estas recuperando un elemento <canvas />?

// Es inferencia -> TypeScript se da cuenta que dentro del if
// ya solo el canvas va poder ser un HTMLCanvasElement
// if (canvas instanceof HTMLCanvasElement) {
//   const ctx = canvas.getContext('2d')
//   console.log(ctx)
// }

// // ----------------------------------------------------

// interface Producto {
//   id: number
//   nombre: string
//   precio: number
//   quantity: number
// }

// interface Zapatilla extends Producto {
//   talla: number
// }

// interface CarritoDeCompras {
//   total: number
//   productos: (Producto | Zapatilla)[]
// }

// 1ra manera de definir funciones
// interface CarritoOps {
//   add: (producto: Producto) => void
//   remove: (id: number) => void
// }

// 2da manera de definir funciones
// interface CarritoOps {
//   clear(): void
// }

// const carritoOps: CarritoOps = {
//   add: (_producto: Producto) => {},
//   remove: (_id: number) => {},
//   clear: () => {}
// }

// const shopping: CarritoDeCompras = {
//   total: 200,
//   productos: [
//     {
//       id: 1,
//       nombre: 'Zapatilla Nike',
//       precio: 100,
//       quantity: 2
//     },
//     {
//       id: 1,
//       nombre: 'Zapatilla Nike',
//       precio: 100,
//       quantity: 2,
//       talla: 42
//     }
//   ]
// }

// Fetchinh de datos en TypeScript
// const APUI_URL = 'https://api.github.com/search/repositories?q=typescript'

// const response = await fetch(APUI_URL)

// if (!response.ok) {
//   throw new Error(`Error al obtener los datos`)
// }

// const data = (await response.json()) as GitHubAPIResponse
// data.items.map(repo => {
//   return {
//     name: repo.name
//   }
// })

// ----------------------------------------------------

// Marrowns

// interface Mario {
//   company: string
//   nombre: string
//   saltar(): void
// }

// interface Sonic {
//   company: string
//   nombre: string
//   correr(): void
// }

// type Personaje = Mario | Sonic

// Type Guard
// Dejame comprobar si personaje es Sonic
// y esta función determina si es Sonic o no
// function checkIsSonic (personaje: Personaje): personaje is Sonic {
//   return (personaje as Sonic).correr !== undefined
// }

// function jugar (personaje: Personaje) {
//   if (checkIsSonic(personaje)) {
//     personaje.correr() // <--Este es Sonic
//     return
//   } else if (!checkIsSonic(personaje)) {
//     personaje.saltar() // <--Este es Mario
//     return
//   } else {
//   }
// }

// function fn (x: string | number) {
//   if (typeof x === 'string') {
//     x.toUpperCase()
//   } else if (typeof x === 'number') {
//     x.toFixed(2)
//   } else {
//     // x //never
//   }
// }

function mostrarLongitud (objeto: number | string) {
  if (typeof objeto === 'string') {
    return objeto.length
  }

  return objeto.toString().length
}

mostrarLongitud(1)
