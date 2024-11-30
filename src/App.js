import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';
import movies from './movies'; 

function App() {
  const [movieList, setMovieList] = useState(movies);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPosterURL, setNewPosterURL] = useState('');
  const [newRating, setNewRating] = useState('');

  const addMovie = () => {
    if (newTitle && newDescription && newPosterURL && newRating) {
      setMovieList(prevMovies => [
        ...prevMovies,
        { title: newTitle, description: newDescription, posterURL: newPosterURL, rating: parseFloat(newRating) },
      ]);
      setNewTitle('');
      setNewDescription('');
      setNewPosterURL('');
      setNewRating('');
    } 
  };

  const handleTitleFilterChange = (newTitle) => {
    setTitleFilter(newTitle);
  };

  const handleRatingFilterChange = (newRating) => {
    setRatingFilter(newRating);
  };

  const filteredMovies = movieList.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= (ratingFilter || 0)
    );
  });

  return (
    <div className="App">
      <h1>Movie App</h1>

      <Filter
        onTitleChange={handleTitleFilterChange}
        onRatingChange={handleRatingFilterChange}
      />

      <MovieList movies={filteredMovies} />

      <div className="add-movie">
        <h3>Add a new movie</h3>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Poster URL"
            value={newPosterURL}
            onChange={(e) => setNewPosterURL(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Rating"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
           
          />
        </div>
        <button onClick={addMovie}>Add New Movie</button>
      </div>
    </div>
  );
}

export default App;