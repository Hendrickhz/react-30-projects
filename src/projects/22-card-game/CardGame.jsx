import React, { useState } from "react";
import Title from "./../../components/Title";
import Button from "./../../components/Button";
import Card from "./Card";
import "./cardgame.css";
import spear from './svg/spear-svgrepo-com.svg'
import crusader from './svg/crusader-svgrepo-com.svg'
import guard from './svg/guard-svgrepo-com.svg'
import warhorse from './svg/warhorse-svgrepo-com.svg'
import archery from './svg/archery-svgrepo-com.svg'
const CardGame = () => {
  const [start, setStart] = useState(false);
  const startGame = () => {
    setStart(true);
  };
  document.body.style.background = "#170536";
  document.body.style.color = "#bab6bf";
  return (
    <div className=" container mx-auto">
      {!start ? (
        <section className="text-center mt-10">
          <Title text={"Card game."} />
          <Button
            onClick={startGame}
            classes={"btn-success mt-5"}
            text={"Start"}
          />
          <div className="flex flex-col mt-5 gap-4">
            <Title text={"Rules:"} />
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                culpa laudantium exercitationem explicabo id, nesciunt facilis
                voluptate atque laboriosam accusamus?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                culpa laudantium exercitationem explicabo id, nesciunt facilis
                voluptate atque laboriosam accusamus?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                culpa laudantium exercitationem explicabo id, nesciunt facilis
                voluptate atque laboriosam accusamus?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                culpa laudantium exercitationem explicabo id, nesciunt facilis
                voluptate atque laboriosam accusamus?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                culpa laudantium exercitationem explicabo id, nesciunt facilis
                voluptate atque laboriosam accusamus?
              </li>
            </ul>
          </div>
        </section>
      ) : (
        <div className=" mt-10 text-center">
          <Title text={"0-1"} />
          <main className="game-board flex justify-around mx-auto text-center">
            <section className="player_1 flex gap-6 flex-wrap">
              <Card  player={"player_1"} unitTypeName={"Spear Man"} unitTypeImg={spear}/>
              <Card  player={"player_1"} unitTypeName={"Crusader"} unitTypeImg={crusader}/>
              <Card  player={"player_1"} unitTypeName={"guard"} unitTypeImg={guard}/>
              <Card  player={"player_1"} unitTypeName={"war horse"} unitTypeImg={warhorse}/>
              <Card  player={"player_1"} unitTypeName={"Archery"} unitTypeImg={archery}/>
              <Card  player={"player_1"} unitTypeName={"Crusader"} unitTypeImg={crusader}/>
            </section>
            <section className="fog-of-war"></section>
            <section className="player_2 flex gap-6 flex-wrap">
            <Card  player={"player_2"} unitTypeName={"Spear Man"} unitTypeImg={spear}/>
            <Card  player={"player_2"} unitTypeName={"Spear Man"} unitTypeImg={spear}/>
                  <Card  player={"player_2"} unitTypeName={"Crusader"} unitTypeImg={crusader}/>
                  <Card  player={"player_2"} unitTypeName={"guard"} unitTypeImg={guard}/>
                  <Card  player={"player_2"} unitTypeName={"war horse"} unitTypeImg={warhorse}/>
                  <Card  player={"player_2"} unitTypeName={"Archery"} unitTypeImg={archery}/>
                
            </section>
          </main>
        </div>
      )}
    </div>
  );
};

export default CardGame;
