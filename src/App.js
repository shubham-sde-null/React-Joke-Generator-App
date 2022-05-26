import React, { useState } from "react";
import { useRef } from "react";
import useRandomJoke from "./useRandomJoke";
import "./App.css";
function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  // when we are not using useRef then what was happening is , every time we click on the input field our page got refreshed and I was getting new joke , but I want our joke only come when  want the user entered his full name, to achieve that we have used useRef which will point to that element whose value we want to alter(it is used to avoid the unnecessary renders)

  const [firstName, setFirstName] = useState("shubham");
  const [lastName, setLastName] = useState("pawar");
  const generateJoke = (e) => {
    e.preventDefault();
    // In this program since we are using prevent default we will get only one joke on every name we enterd because our page is not refreshing and our api provides new jokes when there is reload of window
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  // we want that this function only gets fired when user clicked on the button, and then we want to preven tour browser from getting refreshed, because if browser get refreshes then the old vlaues also gets deleted (i.e not persistant) and after that we just set the first and the last name since page is not refreshing because of which entered values in input fields remains same.
  const joke = useRandomJoke(firstName, lastName);
  // const [joke, setJoke] = useState();
  // useEffect(() => {
  //   const fetchjoke = async () => {
  //     await fetch(
  //       "http://api.icndb.com/jokes/random?firstName=shubham&lastName=pawar"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.value.joke);
  //         setJoke(data.value.joke);
  //       });
  //   };
  //   fetchjoke();
  // }, []);
  // I am making a custom hook which will behave like the code which I have commented

  return (
    <div className="app">
      <h1 id="app__Heading">Joke For You</h1>
      <form id="app__Form">
        <input
          placeholder="first name"
          // value={firstName}
          // onChange={(e) => {
          //   setFirstName(e.target.value);
          // }}
          // earlier I am storing the value in value attribute and showing the result, but it was causing to render page, every time I entered the input and don.t want that to happen I want only thejoke will be generated when user clicked on the button and when user clicked in the button I have fired function which will setfirstname,lastname with the help of useRef
          ref={firstNameRef}
        />
        <input
          placeholder="last name"
          // value={lastName}
          // onChange={(e) => {
          //   setLastName(e.target.value);
          // }}
          ref={lastNameRef}
        />
        <button onClick={generateJoke} id="app__Btn">
          Generate Joke
        </button>
      </form>

      <h2 id="app__Joke">{joke}</h2>
    </div>
  );
}

export default App;
