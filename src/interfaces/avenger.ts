export type IAvenger = {
  name: string
  powerScore: number
  wonBatles: number
  age: number
  battle: (personaje: IAvenger, wonBatles: boolean) => void
}
