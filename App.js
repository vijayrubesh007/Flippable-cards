import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokeCard from './components/JokeCard';
import './App.css';

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_ten');
      setJokes(response.data);
    } catch (error) {
      console.error('Error fetching jokes', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Flippable Joke Cards</h1>
        <button className="new-jokes-btn" onClick={fetchJokes}>Get New Jokes</button>
      </header>

      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div className="card-grid">
          {jokes.map((joke, index) => (
            <JokeCard key={index} setup={joke.setup} punchline={joke.punchline} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

