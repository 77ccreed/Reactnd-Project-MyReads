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

  render() {
    console.log(this.state.books);
    return ( <
      div className = "app" >
      <
      MainPage 
      books={this.state.books}
      />

      <
      /div>
    )
  }
}
export default BooksApp