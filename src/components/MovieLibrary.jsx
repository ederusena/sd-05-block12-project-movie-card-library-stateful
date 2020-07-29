import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data'

class MovieLibrary extends Component {
  constructor(props){
    super(props)

    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
      movies: ''
    }
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie onClick={this.state}/>
      </div>
    );
  }
}

export default MovieLibrary;