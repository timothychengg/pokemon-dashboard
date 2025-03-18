'use client';

interface PokemonListItem {
  pokemon: { name: string; url: string };
}

interface PokemonAPIResponse {
  pokemon: PokemonListItem[];
}

export interface PokemonStat {
  base_stat: number;
  stat: { name: string }; 
}

export interface PokemonData {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  stats: PokemonStat[];
}

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Box } from '@mui/material';
import { pokemonTypes } from '../lib/pokemonTypes';
import PokemonButton from './components/PokemonButton';
import PokemonDialog from './components/PokemonDialog';
import PokemonList from './components/PokemonList';

const PokemonDashboard: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [pokemonList, setPokemonList] = useState<
    { name: string; url: string }[]
  >([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(
    null
  );
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    if (selectedType) {
      fetchPokemonByType(selectedType);
    }
  }, [selectedType]);

  const fetchPokemonByType = async (type: string) => {
    setIsFetching(true);
    setSelectedType(type);

    try {
      const response = await axios.get<PokemonAPIResponse>(
        `https://pokeapi.co/api/v2/type/${type.toLowerCase()}`
      );

      setPokemonList(
        response.data.pokemon
          .map((p) => p.pokemon)
          .sort(() => Math.random() - 0.5)
          .slice(0, 10)
      );
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setPokemonList([]);
    } finally {
      setIsFetching(false);
    }
  };

  const fetchPokemonDetails = async (pokemonUrl: string) => {
    setLoading(true);
    try {
      const response = await axios.get<PokemonData>(pokemonUrl);
      setSelectedPokemon(response.data);
      setOpen(true);
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedTypeColor =
    pokemonTypes.find((t) => t.name === selectedType)?.color || '#FFCB05';

  return (
    <Container>
      <Typography
        variant='h2'
        align='center'
        className='pokemon-title'
        sx={{ color: selectedTypeColor }}
      >
        Pokémon Dashboard
      </Typography>

      <Grid container spacing={2} justifyContent='center' sx={{ mt: 4 }}>
        {pokemonTypes.map((type) => (
          <Grid item key={type.name}>
            <PokemonButton
              onClick={() => fetchPokemonByType(type.name)}
              color={type.color}
            >
              {type.name}
            </PokemonButton>
          </Grid>
        ))}
      </Grid>

      {selectedType && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '150px',
          }}
        >
          <Typography
            variant='h3'
            className='pokemon-type-header'
            sx={{
              color: selectedTypeColor,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            {selectedType} Type Pokémon
          </Typography>

          {isFetching ? (
            <Typography variant='h5' sx={{ color: 'gray', mt: 3 }}>
              Fetching {selectedType} Pokémon...
            </Typography>
          ) : (
            <PokemonList
              pokemonList={pokemonList}
              fetchPokemonDetails={fetchPokemonDetails}
              selectedTypeColor={selectedTypeColor}
            />
          )}
        </Box>
      )}

      <PokemonDialog
        open={open}
        onClose={() => setOpen(false)}
        loading={loading}
        pokemon={selectedPokemon}
        color={selectedTypeColor}
      />
    </Container>
  );
};

export default PokemonDashboard;
