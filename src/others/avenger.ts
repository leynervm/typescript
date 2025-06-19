import { type IAvenger } from '../interfaces/avenger'
class Avenger implements IAvenger {
  name: string
  powerScore: number
  wonBatles: number = 0
  age: number

  constructor (name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
    this.age = 0
  }

  get fullName (): string {
    return `${this.name}, de poder ${this.powerScore}`
  }

  set power (newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower
    } else {
      throw new Error('El poder debe ser menor o igual a 100')
    }
  }

  battle (_enemy: IAvenger, win: boolean) {
    if (win) {
      this.wonBatles++
      this.powerScore += 5
    } else {
      this.powerScore -= 5
    }
  }
}

const avenger = new Avenger('Thor', 100)
avenger.powerScore = 200
