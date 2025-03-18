import { Grid, Typography } from '@mui/material';
import PokemonButton from './PokemonButton';

interface PokemonListProps {
  pokemonList: { name: string; url: string }[];
  fetchPokemonDetails: (url: string) => void;
  selectedTypeColor: string;
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemonList,
  fetchPokemonDetails,
  selectedTypeColor,
}) => (
  <Grid container spacing={2} justifyContent='center'>
    {pokemonList.length === 0 ? (
      <Typography
        align='center'
        sx={{ mt: 2, fontSize: '18px', fontWeight: 'bold', color: 'gray' }}
      >
        Loading Pokémon...
      </Typography>
    ) : (
      pokemonList.map((pokemon, index) => (
        <Grid item key={index}>
          <PokemonButton
            onClick={() => fetchPokemonDetails(pokemon.url)}
            color={selectedTypeColor}
          >
            {pokemon.name}
          </PokemonButton>
        </Grid>
      ))
    )}
  </Grid>
);

export default PokemonList;
