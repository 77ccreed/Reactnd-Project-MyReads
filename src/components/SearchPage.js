import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchPage extends Component{
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {
              
            }
            <input type="text" placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
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