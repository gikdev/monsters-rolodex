export default class Monster {
  constructor(name) {
    this.id = crypto.randomUUID()
    this.name = name
  }
}
