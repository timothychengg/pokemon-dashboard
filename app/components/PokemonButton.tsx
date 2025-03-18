import { Button } from '@mui/material';

interface PokemonButtonProps {
  onClick: () => void;
  color: string;
  children: React.ReactNode;
}

const PokemonButton: React.FC<PokemonButtonProps> = ({
  onClick,
  color,
  children,
}) => (
  <Button
    variant='contained'
    onClick={onClick}
    className='pokemon-button'
    sx={{
      backgroundColor: color,
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'capitalize',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: `0px 0px 12px ${color}`,
      },
    }}
  >
    {children}
  </Button>
);

export default PokemonButton;
