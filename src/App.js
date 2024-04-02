import React, { useEffect, useState } from 'react';
import './App.css';
import ShowQuote from "./components/ShowQuote";

const App = () => {
  const [quoteData, setQuoteData] = useState({});
  const [error, setError] = useState(false);

  //  Search button
  const submitHandler = (e) => {
    e.preventDefault();
    fetchQuote();
  };

  //  Quote API
  const apiUrl = 'https://api.quotable.io/random';


  //  Fetching quote data
  function fetchQuote() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setQuoteData(data);
    })
    .catch(error => {
      setError('Error fetching quote data:', error);
    });
}

  //  To fetch quote data
  useEffect(() => {
    fetchQuote(apiUrl);
  }, [apiUrl]);

  return (
    <div className='App'>
      {error ? (
        <h3 className="error">No data found : </h3>
      ) : (
          <ShowQuote 
            onSubmitHandler={submitHandler} 
            data={quoteData} 
          />
      )}
    </div>
  );
};

export default App