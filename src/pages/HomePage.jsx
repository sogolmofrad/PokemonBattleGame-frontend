// HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function HomePage() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
                const pokemonPromises = response.data.results.map(async (pokemon) => {
                    const pokemonDetailResponse = await axios.get(pokemon.url);
                    return pokemonDetailResponse.data;
                });
                const pokemonData = await Promise.all(pokemonPromises);
                setPokemons(pokemonData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) {
        return <div>Loading Pokémon...</div>;
    }

    if (error) {
        return <div>Error fetching Pokémon: {error.message}</div>;
    }

    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 min-h-screen p-8 flex flex-col items-center">
                <h1 className="text-3xl text-white mb-6">Welcome to Pokémon Battle!</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {pokemons.map((pokemon) => (
                        <div key={pokemon.name} className="bg-white rounded-lg p-4 shadow-md">
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mx-auto mb-2" />
                            <h2 className="text-lg font-semibold">{pokemon.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
