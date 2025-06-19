// function saludar ({ name, age }: { name: string; age: number }): number {
//   //   const { name, age } = persona
//   console.log(`Hola soy ${name} y tengo ${age} años`)
//   return age
// }

// saludar({ name: 'lautaro', age: 15 })

// // -----------------------------------------------------

// // Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale =
//   | 'local'
//   | 'planetary'
//   | 'galactic'
//   | 'universal'
//   | 'multiversal'

// type HeroBasicInfo = {
//   name: string
//   age: number
// }

// type HeroProperties = {
//   readonly id?: HeroId
//   isActive?: boolean
//   powerSale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// let hero = {
//   name: 'Leyner VM',
//   age: 24
// }

// function createHero (values: HeroBasicInfo): Hero {
//   const { name, age } = values
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true
//   }
// }

// const thor = createHero({ name: 'Thor', age: 36 })
// thor.powerSale = 'planetary'

// type ColorHex = `#${string}`
// const colorHexadecimal: ColorHex = '#000000'

// // -----------------------------------------------------

// // Type Indexing

// type HeroProperty = {
//   isActive: boolean
//   address: {
//     planet: string
//     city: string
//   }
// }

// const addressHero: HeroProperty['address'] = {
//   planet: 'Earth',
//   city: 'New York'
// }

// const address = {
//   planet: 'Earth',
//   city: 'New York'
// }

// type Address = typeof address

// const addresTwich: Address = {
//   planet: 'Earth',
//   city: 'Los Angeles'
// }

// // ----------------------------------------------------

// // Type From function return

// function createAddress () {
//   return {
//     planet: 'Earth',
//     city: 'Los Angeles'
//   }
// }

// type AddressType = ReturnType<typeof createAddress>

// // ----------------------------------------------------

// // Arrays

// const languages: (string | number)[] = []

// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push(2)

// const myHeroes: Hero[] = []

// type CellValue = 'X' | 'O' | ''
// type GameBoard = [
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue],
//   [CellValue, CellValue, CellValue]
// ]

// const gameBoard: GameBoard = [
//   ['X', 'O', 'X'],
//   ['O', 'X', 'O'],
//   ['O', 'X', 'O']
// ]

// gameBoard[0][1] = 'X'

// type RGB = readonly [number, number, number]

// const colorRGB: RGB = [2, 5, 2]
// const black: RGB = [0, 0, 0]
// const white: RGB = [255, 255, 255]

// // black.push(255) //Arroja error porque es readonly

// // ----------------------------------------------------

// // Enums

// // Por defecto con javascript
// // const ERROR_TYPES = {
// //   NOT_FOUND: 'not found',
// //   UNAUTHORIZED: 'unauthorized',
// //   FORBIDDEN: 'forbidden'
// // }

// // Usando TS lo mejor seria usando Enums, tambiien le puedo agregar const y valor
// // const ERROR_TYPES {NOT_FOUND= 'not found}
// // usando const compila menos codigo pero sin sirve para que otros puedan usarlo a mas detalle
// enum ERROR_TYPES {
//   NOT_FOUND,
//   UNAUTHORIZED,
//   FORBIDDEN
// }

// function mostrarMensaje (tipoDeError: ERROR_TYPES) {
//   if (tipoDeError == ERROR_TYPES.NOT_FOUND) {
//     console.log(`no se encontró el recurso`)
//   } else if (tipoDeError == ERROR_TYPES.UNAUTHORIZED) {
//     console.log(`no tienes permiso para acceder a este recurso`)
//   } else if (tipoDeError == ERROR_TYPES.FORBIDDEN) {
//     console.log(`acceso denegado`)
//   }
// }

// // ----------------------------------------------------

// const sayHiFromFunction = (fn: (name: string) => void) => {
//   fn('Lautaro')
// }

// const sayHi = (name: string) => {
//   console.log(`Hello ${name}`)
// }

// sayHiFromFunction(sayHi)

// // ----------------------------------------------------
