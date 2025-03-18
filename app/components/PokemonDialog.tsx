import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';

import Image from 'next/image';

interface PokemonDialogProps {
  open: boolean;
  onClose: () => void;
  loading: boolean;
  pokemon: PokemonData | null;
  color: string;
}

interface PokemonData {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
}

const PokemonDialog: React.FC<PokemonDialogProps> = ({
  open,
  onClose,
  loading,
  pokemon,
  color,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    className='pokemon-popup'
    PaperProps={{
      sx: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: `0px 0px 15px ${color}`,
        padding: '16px',
      },
    }}
  >
    {loading ? (
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px',
        }}
      >
        <CircularProgress />
      </DialogContent>
    ) : (
      pokemon && (
        <>
          <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center', color }}>
            {pokemon.name.toUpperCase()}
          </DialogTitle>
          <DialogContent>
            <Image
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
              className='pokemon-image'
            />
            <Typography
              variant='h6'
              sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}
            >
              Type(s):{' '}
              <span style={{ color }}>
                {pokemon.types.map((t) => t.type.name).join(', ')}
              </span>
            </Typography>
            {pokemon.stats.map((stat, index) => (
              <Typography
                key={index}
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                {stat.stat.name.toUpperCase()}: {stat.base_stat}
              </Typography>
            ))}
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button
              onClick={onClose}
              sx={{
                backgroundColor: color,
                color: 'white',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#333' },
              }}
            >
              Close
            </Button>
          </DialogActions>
        </>
      )
    )}
  </Dialog>
);

export default PokemonDialog;
