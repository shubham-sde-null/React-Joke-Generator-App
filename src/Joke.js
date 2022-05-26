import React, { useEffect } from "react";

function Joke() {
  useEffect(() => {
    function fetchjoke() {
      fetch(
        "http://api.icndb.com/jokes/random?firstName=shubham&lastName=pawar"
      )
        .then((data) => {
          return data.json();
        })
        .then((joke) => {
          console.log(joke.value.joke);
        });
    }
    fetchjoke();
  }, []);
  return (
    <div>
      <center>
        <h1>The joke is For You</h1>
        <button>Cike To Generate Joke</button>
      </center>
    </div>
  );
}

export default Joke;
