import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';


const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load Pokemon data.");
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 min-h-screen p-8 flex flex-col items-start">
        <div className="w-full flex sm:items-center md:items-start">
          <h1 className="text-2xl font-bold capitalize text-white mb-10 sm:ml-0 md:ml-12">
            {pokemon.name} [{pokemon.id}]
          </h1>
        </div>
        <div className="w-full md:max-w-7xl bg-white rounded-lg shadow-lg p-6 flex flex-col sm:max-w-6xl md:ml-12 md:mr-12 md:flex-row items-center md:justify-between relative">
          {/* Left column */}
          <div className="flex flex-col items-center text-center ml-auto sm:ml-0 md:ml-20">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-44 h-44"/>
            <p className="font-semibold text-gray-800">
              {pokemon.types.map((type) => type.type.name).join(" · ")}</p>
            <p className="text-gray-600 font-semibold mt-2">
              H–[{pokemon.height / 10} m] W–[{pokemon.weight / 10} kg]</p>
          </div>
            {/* Divider */}
          <div className="hidden md:block h-48 border-l border-gray-300 mx-6"></div>
          {/* Right column */}
          <div className="mt-6 md:mt-4 sm:mr-0 md:mr-20 md:w-1/2">
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="flex items-center mb-4">
                <span className="w-56 mr-2 text-gray-800 font-semibold capitalize text-right">{stat.stat.name}</span>
                <span className="w-12 text-gray-700 text-right">{stat.base_stat}</span>
                <div className="w-full bg-gray-200 rounded-full h-3 mx-2">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Btn */}
        <div className="w-full flex sm:items-center md:items-start">
          <button className="mt-8 sm:ml-0 md:ml-12 px-4 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-700">
            Add to Favorites</button>
        </div>
      </div>
    </div>
  );
};

export default Details;