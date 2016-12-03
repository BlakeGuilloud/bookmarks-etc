import React, { Component } from 'react';
import * as BookmarkActions from '../actions/BookmarkActions';
import { Button, Input } from 'react-form-control';

export default class Form extends Component {
  state = {
    favicon: '',
    notes: '',
    title: '',
    url: '',
  }

  componentWillMount() {
    this.getUrl();
  }

  handleChange = (name, value) => {
    const newState = {};

    newState[name] = value;

    this.setState(newState);
  }

  saveBookmark = () => {
    BookmarkActions.createBookmark(this.state);
  }

  getUrl = () => {
    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
      const { favIconUrl, title, url } = tabs[0];

      const newState = {
        favicon: favIconUrl,
        title,
        url,
      };

      this.setState(newState);
    });
  }

  render() {
    return (
      <div>
        <h4>Add Bookmark</h4>
        <Input initialValue={this.state.title} name="title" onChange={this.handleChange} label="Title" />
        <Input initialValue={this.state.url} name="url" onChange={this.handleChange} label="Bookmark" />
        <Input initialValue={this.state.notes} name="notes" onChange={this.handleChange} label="Notes" />
        <Button type="primary">Hello world</Button>
      </div>
    );
  }
}
