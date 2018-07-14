import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'
import BooksSearch from './BooksSearch'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ListBooks
                  onChangeShelf={this.shelfChangeHandler}
                  bookList={this.state.currentlyReading}
                  bookShelfTitle="Currently Reading" />
                <ListBooks
                  onChangeShelf={this.shelfChangeHandler}
                  bookList={this.state.wantToRead}
                  bookShelfTitle="Want to Read" />
                <ListBooks
                  onChangeShelf={this.shelfChangeHandler}
                  bookList={this.state.read}
                  bookShelfTitle="Read" />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}>
        </Route>

        <Route exact path='/search' render={() => (
          <Search
            result={this.state.queryResult}
            currentQuery={this.state.query}
            onQueryInput={this.searchQueryHandler}
            onChangeShelf={this.shelfChangeHandler} />
        )} />
      </div>
    )
  }
}

export default BooksApp
