import { Component } from "react"
import Card from "../card/card.component"
import "./card-list.styles.css"

export default class CardList extends Component {
  constructor() {
    super()
  }
  render() {
    const { monsters } = this.props

    return (
      <ul className="card-list">
        {monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
        ))}
      </ul>
    )
  }
}
