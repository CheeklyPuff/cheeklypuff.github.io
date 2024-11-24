import { FormControl, MenuItem, SelectChangeEvent } from "@mui/material"
import { useContext } from "react";
import { AppContext, IAppContext } from "../../context/AppContext";
import { StyledHeading, Container, StyledSelect, StyledInputLabel } from './PlayerSelect.styled'

export const PlayerSelect = () => {
  const { player, setPlayer, setExpansions }: IAppContext = useContext(AppContext);
  const players = ['player1', 'player2', 'player3', 'player4'];
  
  const handleChange = (event: SelectChangeEvent) => {
    const selectedVal = event.target.value;
    const getExpansions = JSON.parse(localStorage.getItem(`${selectedVal}MHExpansions`));
    setPlayer(selectedVal);
    setExpansions(getExpansions);
  };

  return (
    <Container>
      <FormControl fullWidth>
        <StyledInputLabel id="playerType">Player</StyledInputLabel>
        <StyledSelect
          labelId="playerType"
          id="player-select"
          value={player}
          label="Select a player type"
          onChange={handleChange}
        >
          {players.map(player => (
            <MenuItem key={player} value={player}>
              {player.replace('player', 'Player ')}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </Container>
  )
}