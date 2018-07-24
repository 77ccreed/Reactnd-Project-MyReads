import React from 'react'
import * as BooksAPI from './data/BooksAPI'
import './css/App.css'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'

class BooksApp extends React.Component {

state= {
  books:[]
}

componentDidMount(){
  BooksAPI.getAll().then((books) =>{
    this.setState({books})
  })
}

moveShelf=(book,shelf) => {
  BooksAPI.update(book,shelf)
}

  render() {
    return ( <
      div className = "app" >
      <
      MainPage 
      books={this.state.books}
      moveShelf={this.moveShelf}
      />

      <
      /div>
    )
  }
}
export default BooksApp