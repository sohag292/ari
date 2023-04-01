import React, { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import SingleCard from "./../singleCard/SingleCard";

const Home = ({handleCard,handleMinutes}) => {
  const [programers, setProgramers] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProgramers(data));
  }, []);
  return (
    <div className="">
      {programers.map((programer) => (
      <SingleCard programer={programer} key={programer.id} handleCard={handleCard} handleMinutes={handleMinutes}></SingleCard>
      ))}
    </div>
  );
};

export default Home;
