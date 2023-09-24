// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

// const fetchPokemon = async (pokemon) => {
//   const res = await axios.get(
//       'https://pokeapi.co/api/v2/pokemon/' + pokemon
//   );
//   return {
//       name: res.data.name,
//       types: res.data.types,
//       sprite: res.data.sprites.front_default,
//   };
// };

// const fetchPokemon = async (req, res) => {
//   try {
//     const res = await axios.get(
//       'https://pokeapi.co/api/v2/pokemon/' + pokemon
//   );
//   res.status(200).json(res)
//   } catch (error) {

//   }
// }

// const fetchPokemon = async (pokemon, res) => {

//   const url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
//   const pokemoninfo = await axios
//     .get(url)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       return err;
//     });

//   res.status(200).json({ pokemoninfo });
// }

// const fetchPokemon = async (res, req) => {
//   try {
//     const url = "https://pokeapi.co/api/v2/pokemon/" + req.body.pokemon;
//     const pokemoninfo = await axios
//       .get(url)
//       .then((response) => {
//         return response.data;
//       })
//       .catch((err) => {
//         return err;
//       });

//     res.status(200).json({ pokemoninfo });
//   } catch (error) {
//     console.log(error.response.data);
//   }
// };

// export default fetchPokemon;

export default async (req, res) => {
    try {
      // Make a GET request using Axios
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur"); // Replace with your API endpoint
  
      // Send the data from the API response as JSON
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
