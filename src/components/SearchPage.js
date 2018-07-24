import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchPage extends Component{
  render() {
    return (
      
    )
  }
}

BooksSearch.propTypes = {
  result: PropTypes.array.isRequired,
  currentQuery: PropTypes.string.isRequired,
  onQueryInput: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default SearchPage;