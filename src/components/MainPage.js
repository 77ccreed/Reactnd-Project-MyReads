import React, { Component } from 'react'
import PropTypes from "prop-types"

class MainPage extends Component{
render(){
  return (
   
  )
}
}

BooksList.propTypes={
  bookShelfTitle: PropTypes.string.isRequired,
  bookList: PropTypes.array.isRequired,
  onChangeShelf:PropTypes.func.isRequired
}

export default MainPage;