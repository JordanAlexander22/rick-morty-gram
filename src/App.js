import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname= "Rick Sanchez" avatar="https://i.pinimg.com/originals/5d/32/76/5d32768cfb240ef4875c712f4b2f08ba.jpg" caption= "We gotta go on an adventure Morty! #goodtimes #loveyabud" image= "https://www.goldderby.com/wp-content/uploads/2019/04/Rick-and-Morty.jpg?w=620&h=360&crop=1" />
        </section>
      </div>;
  }
}
export default App;
