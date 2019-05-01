import React, { Component } from "react";
import Header from "./component/header";
import Headline from "./component/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
