import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './css/App.css'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'

class BooksApp extends React.Component {
  state = {

    showSearchPage: false
  }

  render() {
    return ( <
      div className = "app" >
      <
      MainPage />
      <
      SearchPage / >
      <
      /div>
    )
  }
}
export default BooksApp