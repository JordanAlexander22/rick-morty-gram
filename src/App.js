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
          <Post nickname="Morty Smith" avatar="https://vignette.wikia.nocookie.net/rickandmorty/images/7/7e/Screenshot_2015-09-24_at_1.42.22_PM.png/revision/latest?cb=20150924181727" caption="aww jeez man #nottagain" image="https://am23.akamaized.net/tms/cnt/uploads/2019/09/rick-and-morty-adult-swim-1200x800.jpg" />
          <Post nickname="Summer Smith" avatar="https://cdn.costumewall.com/wp-content/uploads/2017/10/summer-smith.jpg" caption="Stuck with these idiots #again" image="https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Rick-and-Morty-ending-summer-smith-2198645.jpg?r=1575460367052" />
          <Post nickname="Beth Smith" avatar="https://vignette.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest?cb=20191122063320" caption="nothing like a good wine night" image="https://img1.looper.com/img/gallery/why-beth-is-the-most-disturbed-character-on-rick-and-morty/intro-1567089408.jpg" />
          <Post nickname="Jerry Smith" avatar="https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png/revision/latest?cb=20160923151111" caption="Beth, if you see this pls call me" image="https://img1.looper.com/img/gallery/the-worst-thing-thats-ever-happened-to-jerry-on-rick-and-morty/intro-1567519981.jpg" />
        </section>
      </div>;
  }
}
export default App;
