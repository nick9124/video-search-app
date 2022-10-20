import React, { useState } from 'react';

interface ISearchBarProps {
  onFormSubmit: any;
}

interface IEvent {
  target: { value: string };
}

const SearchBar = ({ onFormSubmit }: ISearchBarProps) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event: IEvent): void => {
    setTerm(event.target.value);
  };

  const onSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <div className="ui center aligned basic segment">
            <div className="ui left icon action input">
              <i className="search icon"></i>
              <input type="text" value={term} onChange={onInputChange} />
              <button className="ui submit button">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
