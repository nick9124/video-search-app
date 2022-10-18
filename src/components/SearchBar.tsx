import React, { Component } from 'react';

interface ISearchBarProps {
  onFormSubmit: any;
}

class SearchBar extends Component<ISearchBarProps> {
  state = { term: '' };

  onInputChange = (event: { target: { value: any } }): void => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <div className="ui center aligned basic segment">
              <div className="ui left icon action input">
                <i className="search icon"></i>
                <input
                  type="text"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
                <button className="ui submit button">Search</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
