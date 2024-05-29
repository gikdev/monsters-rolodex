import { Component } from "react"
import "./card.styles.css"

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster
    return (
      <div key={id} className="card-container">
        <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt="a monster" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}
