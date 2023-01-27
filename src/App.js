<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Navbar from './my files/Navbar';
import Hero from './my files/Hero';
import Card from './my files/Card';
import data from './my files/data';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })


  return (
    <div className='xyz'>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div >

  );
}
=======
import React from "react"
import "./App.css"
import Header from "./components/Header"
import Form from "./components/Form"
// import Meme from "./components/Meme"

export default function App() {
    return (
        <div className="App">
>>>>>>> 2eb2ec710968f47b4e17d03ad94711babd26aa9d

            <Header />
            <Form />
            {/* <Meme /> */}

        </div>
    )
}