import React, { Component } from 'react';
import * as BookmarkActions from '../actions/BookmarkActions';

export default class All extends Component {
  state = {
    bookmarks: [],
  }

  componentWillMount() {
    this.getBookmarks();
  }

  getBookmarks = () => {
    BookmarkActions.fetchBookmarks()
      .then((bookmarks) => {
        const currentState = this.state.bookmarks;

        const newState = currentState.concat(bookmarks);

        this.setState({ bookmarks: newState });
      });
  }

  handleRedirect = (url) => {
    console.log('url', url);
    // chrome create new tab and redirect
    window.location = url;
  }

  render() {
    return (
      <div>
        <h4>Your Bookmarks</h4>
        {this.state.bookmarks.length ? this.state.bookmarks.map((bookmark, idx) => {
          return (
            <div key={idx} className="app-bookmark">
              <img src={bookmark.favicon} className="app-bookmark__image" alt=""/>
              <a onClick={() => this.handleRedirect(bookmark.url)} href={bookmark.url} className="app-bookmark__title">{bookmark.title}</a>
            </div>
          );
        }) : null}
      </div>
    );
  }
}
