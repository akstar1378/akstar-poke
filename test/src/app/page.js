"use client";

// import axios from "axios";
import Image from "next/image";
import Card from "./components/card";
import { useEffect, useState } from "react";

import bulbasaur from "@/app/image/pok1.png";
import ivysaur from "@/app/image/poke2.png";
import venusaur from "@/app/image/poke3.png";
import charmander from "@/app/image/poke4.png";

// const fetchPokemonData = async () => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=4"); //
//   const data = await response.json();

//   const pokemon = await Promise.all(
//     data.results.map(async (poke) => {
//       const pokeData = await fetch(poke.url);
//       const pokeDetails = await pokeData.json();
//       return {
//         id: pokeDetails.id,
//         name: pokeDetails.name,
//         imageUrl: pokeDetails.sprites.front_default,
//       };
//     })
//   );
//   return pokemon;
// };

//   return pokemon;

const images = [
  {
    id: 1,
    name: "bulbasaur",
    imageUrl: bulbasaur,
  },
  {
    id: 2,
    name: "ivysaur",
    imageUrl: ivysaur,
  },
  {
    id: 3,
    name: "venusaur",
    imageUrl: venusaur,
  },
  {
    id: 4,
    name: "charmander",
    imageUrl: charmander,
  },
  {
    id: 1,
    name: "bulbasaur",
    imageUrl: bulbasaur,
  },
  {
    id: 2,
    name: "ivysaur",
    imageUrl: ivysaur,
  },
  {
    id: 3,
    name: "venusaur",
    imageUrl: venusaur,
  },
  {
    id: 4,
    name: "charmander",
    imageUrl: charmander,
  },
];

export default function Home() {
  // const [pokemonList, setPokemonList] = useState([]);
  // const [flippedIndices, setFlippedIndices] = useState([]);
  const [randomItem, setRandomItem] = useState([]);
  const [idList, setIdList] = useState([]);
  const [isNotHidden, setIsNotHidden] = useState(true);
  const [win, setWin] = useState(false);

  // useEffect(() => fetchPokemonData(), []);
  useEffect(() => {
    let randomizeArray = [...images].sort(() => 0.5 - Math.random());

    setRandomItem(randomizeArray.slice(0, 8));
  }, []);

  const gameCheck = (imageId) => {
    let checks = [...idList];
    let find = checks.find((check) => imageId === check);
    checks.push({ id: imageId });
    setIdList(checks);

    if (find) {
      setWin(true);
      setIsNotHidden(false);
      console.log("you won");
    } else {
      checks.push(imageId);
      setIdList(checks);
      console.log("idList: ", checks);
      console.log("you lost");
    }
  };

  // const handleFlip = (index) => {
  //   setFlippedIndices((prev) => [...prev, index]);
  // const play = () => {
  //   const pokemonData = fetchPokemonData();
  //   setPokemonList(pokemonData);
  //   console.log(pokemonData);
  // };
  // const random = () => {
  //   const randomNumber = Math.floor(Math.random(1, 8));
  //   return randomNumber;
  // };

  return (
    <div>
      <div className="grid grid-cols-4 m-0 p-2 h-96 justify-between columns-4 row-auto bg-slate-400">
        {" "}
        {/* <Card img={} /> */}{" "}
        {win && (
          <div className="grid col-span-4 justify-center mb-5">
            {" "}
            <h3 className=""> you win </h3>{" "}
          </div>
        )}{" "}
        {randomItem.map((image, index) => (
          <div
            key={image.id}
            className="h-full mb-4 p-0"
            onClick={() => gameCheck(image.id)}
          >
            {" "}
            <Card
              idName={image.id}
              name={image.name}
              index={index}
              isNotHidden={isNotHidden}
              // setReveal={setReveal}
              // reveal={reveal}
              imgProp={image.imageUrl}
            />{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}

//  const renderCards = () => {
//     return pokemonList.map((poke, index) => {
//       const isFlipped = flippedIndices.includes(index);
//       return (
//         <div
//           key={poke.id}
//           onClick={() => handleFlip(index)}
//           style={{
//             width: '100px',
//             height: '100px',
//             margin: '10px',
//             backgroundColor: isFlipped ? 'lightgray' : '#ccc',
//             display: 'inline-block',
//             cursor: 'pointer',
//             textAlign: 'center',
//             lineHeight: '100px'
//           }}
//         >
//           {isFlipped ? <img src={poke.imageUrl} alt={poke.name} style={{ width: '100%', height: '100%' }} /> : 'Flip Me'}
//         </div>
//       );
//     });
//   };

//   return (
//     <div>
//       <h1>Flip Image Game</h1>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {renderCards()}
//       </div>
//     </div>
//   );
// };
