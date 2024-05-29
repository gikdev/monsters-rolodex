import { Component } from "react"
import { useState, useEffect } from "react"
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"

function handleSearchChange(setSearchTerm) {
  return e => setSearchTerm(e.target.value.toLowerCase())
}

function AppF() {
  const [searchTerm, setSearchTerm] = useState("")
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  
  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = response.json()
    setMonsters(data)
  }, [])
  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm)
    )
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchTerm])

  return (
    <>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="Search monsters..."
        onChangeHandler={handleSearchChange(setSearchTerm)}
        value={searchTerm}
      />
      <CardList monsters={filteredMonsters} />
    </>
  )
}

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchTerm: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  onSearchChange = e => this.setState({ searchTerm: e.target.value.toLowerCase() })

  render() {
    const { monsters, searchTerm } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm)
    )

    return (
      <>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          placeholder="Search monsters..."
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </>
    )
  }
}
