import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const people = ["Kookla", "Fran", "Ollie"];

    const stuff = {
      tv: "huge",
      radio: "old",
      toothbrush: "frayed",
      cars: ["Toyota", "Mazda"]
    };

    let state = { ...{ people }, ...stuff };

    let newPeople = ["Odie", ...{ people }.people, "Garfield"];

    let newStuff = { ...stuff };
    newStuff.cars = [...stuff.cars, "Ford"];

    let newState = { ...{ newPeople }, ...newStuff };

    console.log(people);
    console.log(newPeople);
    console.log({ stuff });
    console.log({ newStuff });
    console.log({ state });
    console.log({ newState });
    return (
      <>
        <h1>people</h1>
        <h2>{state.people}</h2>
        <h2>{newState.newPeople}</h2>
        <br />
        <h1>cars</h1>
        <h2>{state.cars}</h2>
        <h2>{newState.cars}</h2>
      </>
    );
  }
}

export default App;
