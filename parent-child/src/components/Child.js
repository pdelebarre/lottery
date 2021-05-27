import MOVIES from "../sources/data";

import React, {useEffect, useState} from 'react'


const Child = (props) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
          console.log("in dropdown, query = ", props.query);
          const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${props.query}&page=1&include_adult=false`;
          try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.results && data.results.length > 0) {
              setResults(data.results);
            }
          } catch (err) {
            console.error(err);
          }
        }, [1000]);
    
        return () => {
          clearTimeout(delayDebounceFn);
        };
      }, [props.query]);

    const onDropdownHandler = (id) => {
        props.onDropdownHandler(id);
    }
    console.log("querying ",props.query);
    const listMovies = results.map(movie => <li key={movie.id}><span onClick={() => onDropdownHandler(movie.id)}>{movie.id} {movie.title}</span></li>);
    return(<ul>{listMovies}</ul>);
}

export default Child;
